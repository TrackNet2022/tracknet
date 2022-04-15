import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor() { }

  getSerie(): Serie {

    let serie: Serie = {
      cid: 1,
      title: 'Breaking Bad',
      sid: 0,
      description: '',
      state: '',
      start_date: 0,
      chapter_count: 0,
      frecuency: '',
      file_path: ''
    };

    return serie;
  }

  getSeries(): Serie[] {
    let series: Serie[] = [];

    return series;
  }

}
