import { Component, Input, OnInit } from '@angular/core'
import { LocalStorageService } from 'src/app/services/local-storage.service'
import { faBookmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'add-to-list-button',
  templateUrl: './add-to-list-button.component.html',
  styleUrls: ['./add-to-list-button.component.scss']
})
export class AddToListButtonComponent implements OnInit {
  @Input() icon: IconDefinition = faBookmark
  @Input() serieId = 0

  status = false
  constructor(
    private _localStorage: LocalStorageService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const list: number[] = this._localStorage.getItem('data')
    if (list && list.includes(this.serieId)) {
      this.status = true
    }
  }

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
    if (this.status) {
      this.toastr.success('Añadido a la lista', '', {
        timeOut: 2000
      })
    } else {
      this.toastr.warning('Borrado de la lista', '', {
        timeOut: 2000
      })
    }
  }
}
