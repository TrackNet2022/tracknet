import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { HttpClient } from '@angular/common/http';

// Importo map reactive extentions
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private http: HttpClient) {}
  /**
   * Obtener la URL de la API 
   * @param path Parametros extra
   * @returns URL completa
   */
  getQuery(path: string) {
    const url = `https://api.tracknet.one:3000${path}`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return url;
  }

  /**
   * Hace una petición de las series que estan en tendencia en España
   * @returns 
   */
  getDiscoverSeries(): Observable<any> {
    let query = this.getQuery('/api/discover');
    return this.http.get(query);
  }

  /**
   * Obtiene todos los datos de una serie
   * @param serieId Identificador de la serie
   * @returns 
   */
  getSerieDetail(serieId: number): Observable<any>  {
    let query = this.getQuery(`/api/serie/${serieId}`);
    return this.http.get(query);
  }
}
