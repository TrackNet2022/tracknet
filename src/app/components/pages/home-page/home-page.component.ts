/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Serie } from 'src/app/models/serie'
import { SerieService } from 'src/app/services/serie.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  series$: Observable<Serie[]> | undefined

  constructor(private _serieService: SerieService) {}
  ngOnInit(): void {
    this.series$ = this._serieService.getDiscoverSeries()
  }
}
