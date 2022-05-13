import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// Importo map reactive extentions
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  private apikey: string = environment.movieAPIkey
  private urlMoviedb: string = environment.urlMoviedb

  constructor(private http: HttpClient) {}

  //Metodo para pasar URL para peticion
  /**
   *
   * @param query
   * @returns
   */
  getQueryMDB(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url, 'callback')
  }

  searchSerieByName(searchTerms: string) {
    const url = `${this.urlMoviedb}/search/tv?query=${searchTerms}&api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK')
  }
  /**
   * Obtiene las series con capitulo nuevo este mes
   */
  getSerieWithChapterThisMonth() {
    const thisDay = new Date()
    const thisMonth = thisDay.getMonth() + 1
    const thisYear = thisDay.getFullYear()
    const lastDayOfMonth = new Date(
      thisDay.getFullYear(),
      thisDay.getMonth() + 1,
      0
    )
    // const monthLastDay = this.daysInAMonth(thisMonth, thisYear)
    // const url = `${this.urlMoviedb}/discover/tv?api_key=${this.apikey}&language=es&with_watch_providers=8|9|337|384&watch_region=ES&primary_release_date.gte=${thisYear}-${thisMonth}-01&primary_release_date.lte=${thisYear}-${thisMonth}-${monthLastDay}&region=ES`
    const url = `${this.urlMoviedb}/discover/tv?api_key=${
      this.apikey
    }&air_date.gte=${thisDay.toISOString().split('T')[0]}&air_date.lte=${
      lastDayOfMonth.toISOString().split('T')[0]
    }`
    console.log(url)
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK')
  }
}
