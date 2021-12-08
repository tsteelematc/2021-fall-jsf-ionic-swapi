import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private swapiSvc: SwapiService
  ) {}

  ngOnInit() {

    this.swapiSvc.loadPlanets().subscribe(
      data => {
        console.log(data);
      }
      , err => console.error(err)
    );
  }

}
