import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GithubUser } from './github-user.model';

@Injectable()
export class GithubLoginService  {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) :  Observable<GithubUser> {
    const auth = btoa(email + ":" + password)
    const myHeaders =  {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + auth
    }

    return this.http.get<GithubUser>('https://api.github.com/user', {headers: myHeaders} )
  }

  getFolowers(user: GithubUser) :  Observable<GithubUser[]> {
    return this.http.get<GithubUser[]>(user.followers_url)
  }
}
