import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  series: any = []

  constructor(_moviedb: MoviedbService) {
    _moviedb.getDiscoverSeries().subscribe(
      {
        next: (v: any) => this.series = v.results,
        error: (e) => console.error(e),
    }
    )
  }

  ngOnInit(): void {

  }

}
