/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core'
import { combineLatest, map, Observable } from 'rxjs'
import { Serie } from '../models/serie'
import { LocalStorageService } from './local-storage.service'
import { SerieService } from './serie.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private _serieService: SerieService,
    private _localStorage: LocalStorageService
  ) {}
  /**
   * Obtiene todos los datos de las series en la lista del usuario
   * @returns
   */
  getUserSerieList(): Observable<any[]> | null {
    const userList: number[] = this._localStorage.getItem('data')
    if (userList) {
      const serieObs$: Observable<Serie>[] = userList.map(
        (serieId: number): Observable<Serie> => {
          return this._serieService.getSerieDetail(serieId)
        }
      )
      //Combinar varias promesas en una
      return combineLatest(serieObs$).pipe(
        map((series) => series.map((serie: any) => serie.data))
      )
    }

    return null
  }

  isListEmpty() {
    const data = this._localStorage.getItem('data')
    return data == null || data.length == 0
  }
}
