import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Serie } from 'src/app/models/serie'

import { CalendarEvent, CalendarView } from 'angular-calendar'
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay
} from 'date-fns'
import { combineLatest, map, Observable } from 'rxjs'
import { SerieService } from 'src/app/services/serie.service'
import { LocalStorageService } from 'src/app/services/local-storage.service'

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
  events$: Observable<CalendarEvent<{ film: Serie }>[]> = new Observable()
  constructor(
    private _serieService: SerieService,
    private _localStorage: LocalStorageService
  ) {
    this.fetchEvents()
  }
  ngOnInit(): void {
    this.fetchEvents()
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view]

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view]

    const userList = this._localStorage.getItem('data')
    if (userList.length > 1) {
      const requestList = userList.map((id: number) => {
        return this._serieService
          .getSerieDetail(id)
          .pipe(map((response) => response.data))
      })
      this.events$ = combineLatest<CalendarEvent[]>(requestList).pipe(
        map((series: any) => {
          return series.map((serie: Serie) => {
            return {
              title: serie.name,
              start: new Date(),
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
