import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/pesron';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  urlServer = 'https://jsonplaceholder.typicode.com/posts/';
  loggedUser = false;
  constructor(private httpClient: HttpClient) {}
  // l: String, p: String

  /**
   * method  loging  to the server
   *
   * @param Login
   * @param Password
   *
   * @returns ??
   */
  postLoginUser(l: String, p: String): Observable<Array<Body>> {
    return this.httpClient.post<Array<Body>>(this.urlServer, {l});
  }
}
