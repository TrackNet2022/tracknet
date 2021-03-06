/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// Import map reactive extentions
import { Observable } from 'rxjs'
import { Serie } from '../models/serie'

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  constructor(private http: HttpClient) {}
  /**
   * Obtener la URL de la API
   * @param path Parámetros extra
   * @returns URL completa
   */
  getQuery(path: string) {
    const url = `https://api.tracknet.one${path}`

    // Si la petición se hace con http.get da error porque moviedb no acepta cross domain
    // por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return url
  }

  /**
   * Hace una petición de las series que estan en tendencia en España
   * @returns lista de series
   */
  getDiscoverSeries(): Observable<any> {
    const query = this.getQuery('/api/discover')
    return this.http.get(query)
  }

  /**
   * Obtiene todos los datos de una serie
   * @param serieId Identificador de la serie
   * @returns Observable<Serie>
   */
  getSerieDetail(serieId: number): Observable<any> {
    const query = this.getQuery(`/api/serie/${serieId}`)
    return this.http.get<Serie>(query)
  }

  /**
   * Obtiene todos los datos de una serie
   * @param serieId Identificador de la serie
   * @returns Observable<Serie[]>
   */
  searchByTerm(term: string): Observable<any> {
    const query = this.getQuery(`/api/search?term=${term}`)
    return this.http.get<Serie[]>(query)
  }
}
