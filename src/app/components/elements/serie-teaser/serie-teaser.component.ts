import { Component, Input } from '@angular/core'
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Serie } from 'src/app/models/serie'

@Component({
  selector: 'serie-teaser',
  templateUrl: './serie-teaser.component.html',
  styleUrls: ['./serie-teaser.component.scss']
})
export class SerieTeaserComponent {
  faPlus = faPlus
  faCircle = faCircle
  @Input() serieData: Serie | null = null
}
