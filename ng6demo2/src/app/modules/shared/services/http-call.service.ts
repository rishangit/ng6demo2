import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class HttpCallService {

  constructor(
    private http: HttpClient
  ) { }

  // post(url: string, body: any) {  
  //   let bodyString = JSON.stringify(body); // Stringify payload
  //   let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
  //   let options = new RequestOptionsArgs({ headers: headers }); // Create a request option

  //   return this.http.post('/api' + url, body, options) // ...using post request
  //     .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  // }

  get():Observable<any> {

    //return this.http.get('/Values/Get/1').map((res: Response) => res.json()))// ...and calling .json() on the response to return data

    return this.http.get('api/values/Rishan').pipe(map((response: any) => {
      debugger
      
      response.json()}));
  }
}
