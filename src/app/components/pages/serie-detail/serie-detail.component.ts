import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Serie } from 'src/app/models/serie'
import { MoviedbService } from 'src/app/services/moviedb.service'

@Component({
  selector: 'serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {
  serie?: Serie

  constructor(
    private activatedRoute: ActivatedRoute,
    _moviedb: MoviedbService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      _moviedb.getSerieDetail(params['id']).subscribe({
        next: (v: any) => {
          const {
            id,
            name,
            poster_path,
            number_of_seasons,
            number_of_episodes,
            first_air_date,
            season_number,
            overview,
            status,
            next_episode_to_air
          } = v.data
          this.serie = {
            sid: id,
            cid: 1,
            title: name,
            description: overview,
            file_path: 'https://image.tmdb.org/t/p/w500/' + poster_path,
            number_of_episodes: number_of_episodes,
            number_of_seasons: number_of_seasons,
            frecuency: 'Weekly',
            status: status,
            start_date: first_air_date
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
      console.log(params['id'])
    })
  }

  ngOnInit(): void {}
}
