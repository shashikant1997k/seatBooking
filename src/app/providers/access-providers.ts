
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class AccessProviders{
    // url backend api json
    url: string = "https://reservation-ed548.firebaseio.com/booking.json";

    constructor(
        public http: HttpClient
    ) { }

    postData(body){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8'
        })
        let options = {
            headers: headers
        }

        return this.http.post(this.url, JSON.stringify(body), options).map(res => res);
    }
}
