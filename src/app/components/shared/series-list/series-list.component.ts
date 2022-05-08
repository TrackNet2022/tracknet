import { Component, Input } from '@angular/core'
import { Serie } from 'src/app/models/serie'

@Component({
  selector: 'series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent {
  @Input() series: Serie[] = []
}
