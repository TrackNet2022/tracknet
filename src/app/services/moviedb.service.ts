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
}
