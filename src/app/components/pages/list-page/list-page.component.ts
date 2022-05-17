/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { Serie } from 'src/app/models/serie'

import { UserService } from 'src/app/services/user.service'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  userSerieList$: Observable<Serie[]> = new Observable()
  userNextEpisodes$: Observable<Serie[]> = new Observable()
  faCalendar = faCalendar
  actualView = 'list'

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    // const element1 = (document.getElementById('yourSerieLabel') = new Element())
    const data = this._userService.getUserSerieList()
    if (data != null) {
      this.userSerieList$ = data
      this.userNextEpisodes$ = data.pipe(
        map((series: Serie[]) =>
          series.filter((serie: Serie) => serie.next_episode_to_air)
        )
      )
    } else {
      // element1.style.display = 'none'
    }
  }

  onClick() {
    if (this.actualView == 'calendar') this.actualView = 'list'
    else this.actualView = 'calendar'
  }
}
