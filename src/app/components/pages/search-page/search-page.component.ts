/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core'
import { Serie } from 'src/app/models/serie'
import { MoviedbService } from 'src/app/services/moviedb.service'
@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  resultSeries: Serie[] = []
  searchTerm = ''
  _mobiedb: MoviedbService

  constructor(_mobiedb: MoviedbService) {
    this._mobiedb = _mobiedb
  }

  onChange(searchTerm: string) {
    if (searchTerm.length > 3) {
      console.log(this.searchTerm)
      this.resultSeries = this.search()
    }
  }

  search() {
    const searchedSeries: Serie[] = []
    console.log(this.searchTerm)
    this._mobiedb.searchSerieByName(this.searchTerm).subscribe({
      next: (e: any) => {
        const results = e.results
        console.log(results)
        results.forEach((result: Serie) => searchedSeries.push(result))
      }
    })
    return searchedSeries
  }
}
