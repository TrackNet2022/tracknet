import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CalendarEvent } from 'angular-calendar'
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns'
import { Subject } from 'rxjs/internal/Subject'
import { Serie } from 'src/app/models/serie'
import { MoviedbService } from 'src/app/services/moviedb.service'
import { SerieService } from 'src/app/services/serie.service'

//New
// function getTimezoneOffsetString(date: Date): string {
//   const timezoneOffset = date.getTimezoneOffset()
//   const hoursOffset = String(
//     Math.floor(Math.abs(timezoneOffset / 60))
//   ).padStart(2, '0')
//   const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0')
//   const direction = timezoneOffset > 0 ? '-' : '+'

//   return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`
// }

@Component({
  selector: 'calendar-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-element.component.html',
  styleUrls: ['./calendar-element.component.scss']
})
export class CalendarElementComponent {
  newEpisodesThisMonth: Serie[] = []
  _SerieService: SerieService
  refresh = new Subject<void>()
  events: CalendarEvent[] = []

  constructor(_SerieService: SerieService) {
    this._SerieService = _SerieService
  }
  // constructor(_MoviedbService: MoviedbService, _SerieService: SerieService) {
  //   _MoviedbService.getSerieWithChapterThisMonth().subscribe({
  //     next: (e: any) => {
  //       const results = e.results
  //       results.forEach((result: Serie) => {
  //         _SerieService.getSerieDetail(result.id).subscribe({
  //           next: (e: any) => {
  //             result = e.data
  //             const { name, next_episode_to_air, id } = result
  //             const air_date = next_episode_to_air?.air_date
  //               ? next_episode_to_air?.air_date
  //               : new Date().toString()
  //             this.events.push({
  //               start: new Date(Date.parse(air_date)),
  //               end: new Date(Date.parse(air_date)),
  //               title: name,
  //               color: this.colors.red,
  //               allDay: true
  //             })
  //             console.log({ event: this.events })
  //           }
  //         })
  //       })
  //     },
  //     complete: () => {
  //       console.log(this.events)
  //     },
  //     error: () => console.log(this.newEpisodesThisMonth)
  //   })
  //   this._SerieService = _SerieService
  // }

  viewDate: Date = new Date()

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  }

  loadSeries() {
    this.newEpisodesThisMonth.forEach((serie: Serie) => {
      this._SerieService.getSerieDetail(serie.id).subscribe({
        next: (e: any) => {
          serie = e.data
        },
        complete: () => {
          const { name, next_episode_to_air, id } = serie
          const air_date = next_episode_to_air?.air_date
            ? next_episode_to_air?.air_date
            : new Date().toString()
          // console.log(new Date(Date.parse(air_date)))
          this.events.push({
            start: new Date(Date.parse(air_date)),
            // end: new Date(Date.parse(air_date)),
            title: name,
            color: this.colors.red,
            allDay: true
          })
          this.refresh.next()
          // console.log(this.events)
        }
      })
    })
  }
}
