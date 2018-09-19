import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCallService } from '../shared/services/http-call.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {


   }


   getdata(){
     //return this.httpCallService.get('home/Index')
   }

}
