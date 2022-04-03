import { Component, OnInit } from '@angular/core';
import { faHouse, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHouse = faHouse
  faMagnifyingGlass = faMagnifyingGlass
  faPlus = faPlus

  constructor() { }

  toggleSearchBox() {
    let searchBox = document.getElementById('search-box')
    searchBox?.classList.toggle('active')
  }

  ngOnInit(): void {

  }



}
