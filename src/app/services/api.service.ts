import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { AuthenticationService } from './authentication.service';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient,
        private dataService: DataService
    ) {
    }

    post(url: string, requestData: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Content-Type': 'application/json',
                'Accept': 'application/json',
            }), observe: 'response' as 'body'
        };

        return this.http
            .post(environment.appUrl + url, requestData, httpOptions)
            .pipe(map(data => {
                return data['body'];
            }));
    }

    get(url: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Forwarded-For': '10.1.100.3'
            }), observe: 'response' as 'body'
        };


        return this.http
            .get(environment.appUrl + url, httpOptions)
            .pipe(map(data => {
                return data['body'];
            }));
    }
}
