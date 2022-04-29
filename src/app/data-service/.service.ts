import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataloadService {
  constructor(private http: HttpClient) {}

  // LoadData(): JSON {
  //   return this.http.get<any>().subscribe(data => {
  //     [
  //       { fname: 'Bhavin', lname: 'Mehta' },
  //       { fname: 'Devidas', lname: 'Gaikwad' },
  //       { fname: 'Tushar', lname: 'Raut' },
  //     ]}
  // }

  private extractData(res: Response) {
    let body = res;
    return body;
  }
}
