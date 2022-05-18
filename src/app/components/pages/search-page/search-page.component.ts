/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Serie } from 'src/app/models/serie'
import { SerieService } from 'src/app/services/serie.service'
@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  resultSeries: Observable<Serie[]> = new Observable()
  searchTerm = ''
  series: Serie[] = []
  constructor(private _serieService: SerieService) {}
  ngOnInit(): void {
    this._serieService.getDiscoverSeries().subscribe({
      next: (v: Serie[]) => (this.series = v),
      error: (e) => console.error(e)
    })
  }

  onChange(searchTerm: string) {
    if (searchTerm.length > 3) {
      this.search()
    } else {
      this.resultSeries = new Observable()
    }
  }

  search() {
    this.resultSeries = this._serieService.searchByTerm(this.searchTerm)
  }
}
