/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core'
import { Serie } from 'src/app/models/serie'
import { MoviedbService } from 'src/app/services/moviedb.service'
import { SerieService } from 'src/app/services/serie.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  series: Serie[] = []

  constructor(_serieService: SerieService, _moviedb: MoviedbService) {
    _serieService.getDiscoverSeries().subscribe({
      next: (v: Serie[]) => (this.series = v),
      error: (e) => console.error(e),
      complete: () => console.log(this.series)
    })
  }
}
