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
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=UTF-8'
    );
    const httpHeaders1 = new HttpHeaders().append(
'email', 'test@test.pl'
    ).append(
      'password', 'admn1'
    );
    const body = new HttpParams()
      .append('email', email + '')
      .append('password', password + '');
    // .toString();
    const body2 = {
      'email': 'test@test.pl',
      'password': 'admin1'
    };
    // const options = new RequestOptions({ headers: httpHeaders });
    const body3 = JSON.stringify({
      email: email,
      pasword: password
    });
    // const param = new HttpParams().set('userId', 1 + '');
    return this.httpClient.post<Array<Body>>(this.urlServer, body3);
  }
}
