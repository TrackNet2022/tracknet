import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Serie } from 'src/app/models/serie'
import { SerieService } from 'src/app/services/serie.service'

@Component({
  selector: 'serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent {
  data?: Serie

  constructor(
    private activatedRoute: ActivatedRoute,
    _serieService: SerieService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      _serieService.getSerieDetail(params['id']).subscribe({
        next: (v) => (this.data = v.data),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
      console.log(params['id'])
    })
  }
}
