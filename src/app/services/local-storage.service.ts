import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { UserList } from '../models/user-list'
import { LocalStorageRefService } from './local-storage-ref.service'

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private _localStorage: Storage

  private _myData$ = new BehaviorSubject<UserList>({})
  myData$ = this._myData$.asObservable()

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage
  }

  setInfo(data: UserList): void {
    const jsonData = JSON.stringify(data)
    this._localStorage.setItem('myData', jsonData)
    this._myData$.next(data)
  }

  loadInfo(): void {
    const localData = this._localStorage.getItem('myData')
    if (localData) {
      const data = JSON.parse(localData)
      this._myData$.next(data)
    }
  }

  clearInfo() {
    this._localStorage.removeItem('myData')
    this._myData$.next({})
  }

  clearAllLocalStorage(): void {
    this._localStorage.clear()
    this._myData$.next({})
  }
}
