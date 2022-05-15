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
  getUserSerieList() {
    const userList: number[] = this._localStorage.getItem('data')
    if (userList) {
      const serieObs$: Observable<Serie>[] = userList.map(
        (serieId: number): Observable<Serie> => {
          return this._serieService.getSerieDetail(serieId)
        }
      )
      return combineLatest(serieObs$).pipe(
        map((series) => series.map((serie: any) => serie.data))
      )
    }

    return null
  }
}
