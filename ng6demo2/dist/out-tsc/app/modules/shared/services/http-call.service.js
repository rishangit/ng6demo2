var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
var HttpCallService = /** @class */ (function () {
    function HttpCallService(http) {
        this.http = http;
    }
    // post(url: string, body: any) {  
    //   let bodyString = JSON.stringify(body); // Stringify payload
    //   let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
    //   let options = new RequestOptionsArgs({ headers: headers }); // Create a request option
    //   return this.http.post('/api' + url, body, options) // ...using post request
    //     .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }
    HttpCallService.prototype.get = function () {
        //return this.http.get('/Values/Get/1').map((res: Response) => res.json()))// ...and calling .json() on the response to return data
        return this.http.get('api/account/Rishan').pipe(map(function (response) {
            debugger;
            response.json();
        }));
    };
    HttpCallService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpCallService);
    return HttpCallService;
}());
export { HttpCallService };
//# sourceMappingURL=http-call.service.js.map