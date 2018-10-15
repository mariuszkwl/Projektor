import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/pesron';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  urlServer = ' https://stream-support.herokuapp.com/login';
  // urlServer = 'https://jsonplaceholder.typicode.com/posts/';
  loggedUser = false;
  constructor(private httpClient: HttpClient) {}
  // l: String, p: String

  /**
   * method  loging  to the server
   *
   * @param email
   * @param password
   *
   * @returns ??
   */
  postLoginUser(email: String, password: String): Observable<Array<Body>> {
    // const httpHeaders = new HttpHeaders().append(
    //   'Content-Type',
    //   'application/x-www-form-urlencoded; charset=UTF-8'
    // );
    const body = new HttpParams()
      .append('email', email + '')
      .append('password', password + '');
    // .toString();
    const body2 = {
      email: email,
      password: password
    };
    const body3 = JSON.stringify({
      email: email,
      pasword: password
    });
    // const param = new HttpParams().set('userId', 1 + '');
    return this.httpClient.post<Array<Body>>(
      this.urlServer,
      body3
      //   {
      //   headers: httpHeaders
      // }
    );
  }
}
