import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {
  constructor(http: HttpClient) {
    super('https://api.github.com/', http);
  }

  getFollowerList(username: string) {
    return this.http.get(this.url + 'users/' + username + '/followers')
      .pipe(catchError(this.errorHandler));
  }
  getUserDetails(username: string) {
    return this.http.get(this.url + 'users/' + username)
      .pipe(catchError(this.errorHandler));
  }
}

// https://api.github.com/users/bradlygreen/followers
