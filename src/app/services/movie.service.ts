import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '4e026173';

  constructor(private http: HttpClient) {}

  searchMovie(title: string): Observable<any> {
    return this.http
      .get(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`)
      .pipe(map((results) => results['Search']));
  }

  getMovieDetails(id: string) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
