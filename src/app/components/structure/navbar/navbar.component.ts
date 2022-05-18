import { Component } from '@angular/core'
import {
  faHouse,
  faMagnifyingGlass,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faHouse = faHouse
  faMagnifyingGlass = faMagnifyingGlass
  faPlus = faPlus
}
