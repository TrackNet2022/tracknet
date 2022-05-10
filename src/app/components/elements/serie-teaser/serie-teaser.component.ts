import { Component, Input } from '@angular/core'
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Serie } from 'src/app/models/serie'
import { LocalStorageService } from 'src/app/services/local-storage.service'

@Component({
  selector: 'serie-teaser',
  templateUrl: './serie-teaser.component.html',
  styleUrls: ['./serie-teaser.component.scss']
})
export class SerieTeaserComponent {
  faPlus = faPlus
  faCircle = faCircle

  @Input() serieData: Serie | null = null

  constructor(private _localStorageService: LocalStorageService) {}

  saveToList(id: number) {
    const currentData: number[] = this._localStorageService.getItem('data')
    if (currentData && !currentData.includes(id)) {
      currentData.push(id)
      this._localStorageService.setItem('data', currentData)
    } else {
      this._localStorageService.setItem('data', [id])
    }
    console.log(currentData)
  }
}
