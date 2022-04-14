import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Importo map reactive extentions
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

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
        
        console.log();
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
