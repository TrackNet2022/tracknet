import { Component, Input } from '@angular/core'
import { LocalStorageService } from 'src/app/services/local-storage.service'
import { faBookmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'add-to-list-button',
  templateUrl: './add-to-list-button.component.html',
  styleUrls: ['./add-to-list-button.component.scss']
})
export class AddToListButtonComponent {
  @Input() icon: IconDefinition = faBookmark
  @Input() serieId = 0

  status = false
  constructor(private _localStorage: LocalStorageService) {}

  saveToList(id: number) {
    const currentData: number[] = this._localStorage.getItem('data')
    console.log(currentData)
    if (currentData && !currentData.includes(id)) {
      currentData.push(id)
      this._localStorage.setItem('data', currentData)
    } else if (currentData && currentData.includes(id)) {
      this._localStorage.setItem(
        'data',
        currentData.filter((e) => e != id)
      )
    } else {
      this._localStorage.setItem('data', [id])
    }
    this.status = !this.status
  }
}
