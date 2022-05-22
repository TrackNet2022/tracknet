import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Serie } from 'src/app/models/serie'

import { CalendarEvent, CalendarView } from 'angular-calendar'
import { isSameMonth, isSameDay } from 'date-fns'
import { combineLatest, map, Observable } from 'rxjs'
import { SerieService } from 'src/app/services/serie.service'
import { LocalStorageService } from 'src/app/services/local-storage.service'
import { UserService } from 'src/app/services/user.service'

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset()
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0')
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0')
  const direction = timezoneOffset > 0 ? '-' : '+'

  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`
}

@Component({
  selector: 'calendar-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-element.component.html',
  styleUrls: ['./calendar-element.component.scss']
})
export class CalendarElementComponent implements OnInit {
  view: CalendarView = CalendarView.Month

  viewDate: Date = new Date()

  activeDayIsOpen = false
  events$: Observable<CalendarEvent<{ film: Serie }>[]> | undefined
  constructor(
    private _userService: UserService,
    private _localStorage: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.fetchEvents()
  }
  /**
   * Función que hace una petición a la API, y recibe una lista de Series
   * para posteriormente tranformar del modelo Serie al modelo CalendarEvent
   */
  fetchEvents(): void {
    const userList = this._localStorage.getItem('data')
    if (userList.length > 0) {
      this.events$ = this._userService.getUserSerieList()?.pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((series: any) => {
          return series.map((serie: Serie) => {
            return {
              title: serie.name,
              start: new Date(
                serie.next_episode_to_air?.air_date +
                  getTimezoneOffsetString(this.viewDate)
              ),
              allDay: true,
              meta: {
                serie
              }
            }
          })
        })
      )
    }
  }
  /**
   * Función para controlar cuando un día del calendario es clickado por el usuario
   * @param param0 Fecha actual y los eventos
   */
  dayClicked({
    date,
    events
  }: {
    date: Date
    events: CalendarEvent<{ serie: Serie }>[]
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false
      } else {
        this.activeDayIsOpen = true
        this.viewDate = date
      }
    }
  }
}
