import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(key: string) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value))
    console.log(value)
  }

  removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}
