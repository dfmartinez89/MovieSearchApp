import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  results: Observable<any>;
  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.results = this.filmsService.searchMovie('Jurassic Park');
  }
}
