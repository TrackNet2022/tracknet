import { Component } from '@angular/core'
import { SerieService } from 'src/app/services/serie.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  series: any = []

  constructor(_serieService: SerieService) {
    _serieService.getDiscoverSeries().subscribe({
      next: (v: any) => (this.series = v),
      error: (e) => console.error(e)
    })
  }
}
