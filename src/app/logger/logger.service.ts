import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/pesron';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  urlServer: String = ' ';
  loggedUser = false;
  constructor() {}

  // postLoginUser(l: String, p: String): Observable<Array<Person>> {

  // }
}
