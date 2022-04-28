import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Importo map reactive extentions
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Serie } from "../models/serie";

@Injectable({
    providedIn: "root"
})
export class MoviedbService {

    private apikey: string = environment.movieAPIkey;
    private urlMoviedb: string = environment.urlMoviedb;

    constructor(private http: HttpClient) { }

    //Metodo para pasar URL para peticion

    getQuery(query: string) {
        const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey
            }&language=es&callback=JSONP_CALLBACK`;

        // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
        //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
        return this.http.jsonp(url, "callback");
    }


    getPoster(tvid: number) {
        const url = `${this.urlMoviedb}/tv/${tvid}/images?&api_key=${this.apikey}&language=es`;
        var poster: string;
        this.http.jsonp(url, 'callback=JSONP_CALLBACK').subscribe(
            {
                next: (v: any) => console.log(v.posters[0].file_path),
                error: (e) => console.error(e),
                complete: () => console.info('complete'),
            }
        )

    }


    getDiscoverSeries() {
    // const url = `${this.urlMoviedb}/discover/tv?sort_by=popularity.desc&api_key=${this.apikey}&language=es&with_watch_providers=8|9|337|384&watch_region=ES&page=1`;
    //     return this.http.jsonp(url, 'callback=JSONP_CALLBACK')
    const url = 'http://api.tracknet.one:3000/api/discover';
        return this.http.get(url)
    }

    getSerieDetail(serieId: number) {
        // const url = `${this.urlMoviedb}/tv/${serieId}?api_key=${this.apikey}&language=es`;
        // let serieData: Serie;
        const url = 'http://api.tracknet.one:3000/api/serie/'+ serieId;
        return this.http.get(url)

        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');

    }


    // Otra alternativa para hacer la peticion
    /*   getDiscoverMovies() {
    const url = `${
      this.urlMoviedb
    }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "").pipe(map((res: any) => res.results));
  } */

}
