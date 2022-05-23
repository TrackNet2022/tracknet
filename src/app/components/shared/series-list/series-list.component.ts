import { Component, Input, OnInit } from '@angular/core'
import { Serie } from 'src/app/models/serie'

@Component({
  selector: 'series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  @Input() series: Serie[] = []
  loading = true
  ngOnInit(): void {
    setTimeout(() => (this.loading = false), 1000)
  }
}
