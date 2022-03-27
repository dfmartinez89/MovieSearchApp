import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  title: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  searchMovieByTitle() {
    this.results = this.movieService.searchMovie(this.title);
  }
}
