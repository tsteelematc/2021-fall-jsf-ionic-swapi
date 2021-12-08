import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, merge } from 'rxjs';
import { repeat, tap, map } from 'rxjs/operators';

export interface SwapiPlanetDataWeCareAbout {
  next: string;
  results: {
    name: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private httpSvc: HttpClient
  ) { }

  loadPlanets = (): Observable<SwapiPlanetDataWeCareAbout> => {

    const page1 =  this.httpSvc
      .get<SwapiPlanetDataWeCareAbout>("https://swapi.dev/api/planets")
      .pipe(
        // repeat(3)
        tap(x => console.log(x))
        , map(x => ({
          next: x.next
          , results: x.results.map(y => ({ name: y.name }))
        }))
        , tap(x => console.log(x))
      )
    ;

    const page2 = this.httpSvc.get<SwapiPlanetDataWeCareAbout>("https://swapi.dev/api/planets/?page=2")
  
    return merge(page1, page2);
  }; 
}
