import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  title: string;
  results: Observable<any>;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get("id");
    this.results = this.movieService.searchMovie(this.title);
  }
}
