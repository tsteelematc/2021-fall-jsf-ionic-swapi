import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SwapiPlanetDataWeCareAbout {
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

    return this.httpSvc.get<SwapiPlanetDataWeCareAbout>("https://swapi.dev/api/planets");
  }; 
}
