import { Component, OnInit } from '@angular/core';
import { SwapiService} from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private swapiSvc: SwapiService
  ) {}

  planets: {
    name: string;
  }[] = [];

  ngOnInit() {

    this.swapiSvc.loadPlanets().subscribe(
      data => {
        console.log(data);
        this.planets = [
          ...this.planets
          , ...data.results
        ].sort(
          (a, b) => a.name.toLocaleUpperCase().localeCompare(b.name.toUpperCase())
        );
        console.log(this.planets);
      }
      , err => console.error(err)
    );
  }
}
