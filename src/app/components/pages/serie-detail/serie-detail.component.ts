import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Serie } from 'src/app/models/serie'
import { SerieService } from 'src/app/services/serie.service'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { LocalStorageService } from 'src/app/services/local-storage.service'

@Component({
  selector: 'serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent {
  data?: Serie
  faBookmark = faBookmark
  added = false
  constructor(
    private activatedRoute: ActivatedRoute,
    _serieService: SerieService,
    private _localStorageService: LocalStorageService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      _serieService.getSerieDetail(params['id']).subscribe({
        next: (v) => (this.data = v.data),
        error: (e) => console.error(e),
        complete: () => {
          const userList: number[] = this._localStorageService.getItem('data')
          if (userList && userList.includes(this.data?.id ?? 0)) {
            this.added = true
          }
        }
      })
    })
  }

  /**
   * Función que guarda la serie en la lista
   * @param id identificador de serie
   */
  saveToList(id: number) {
    const currentData: number[] = this._localStorageService.getItem('data')
    console.log(currentData)
    if (currentData && !currentData.includes(id)) {
      currentData.push(id)
      this._localStorageService.setItem('data', currentData)
    } else if (currentData && currentData.includes(id)) {
      this._localStorageService.setItem(
        'data',
        currentData.filter((e) => e != id)
      )
    } else {
      this._localStorageService.setItem('data', [id])
    }
    this.added = !this.added
  }
}
