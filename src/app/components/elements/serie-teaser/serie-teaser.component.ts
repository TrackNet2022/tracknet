import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'serie-teaser',
  templateUrl: './serie-teaser.component.html',
  styleUrls: ['./serie-teaser.component.scss']
})
export class SerieTeaserComponent implements OnInit {
  faPlus = faPlus
  faCircle = faCircle
  @Input() serieData: any;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.serieData)
  }

}
