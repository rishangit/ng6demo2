import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpCallService } from '../shared/services/http-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abc: string;
  constructor(private httpCallService: HttpCallService) { }

  ngOnInit() {
    debugger
    this.abc = 'aaaaaaaaaa';
    // console.log('aaaaaaaaaa')


    // this.http.get('/api/Values/Get').subscribe((obj)=>{
    //   this.abc = 'bbbbbb';
    // });
  }


  event_click() {
    this.getdata()
  }

  getdata() {
    this.httpCallService.get().subscribe(obj => {
      debugger
      this.abc = 'bbbb';
    })
  }
}
