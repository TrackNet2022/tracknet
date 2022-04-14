import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { MoviedbService } from './services/moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracknet';
  poster: any
  constructor(private _moviedbService: MoviedbService) {
   this.poster = _moviedbService.getPoster(92749)
  console.log(this.poster)
  }
}