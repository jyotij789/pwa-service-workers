import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(public http: HttpClient) { }

    getProducts(): Observable<any> {
        return this.http.get('https://2f3299cb.ngrok.io/getAllCustProfile');

    }
    setEmployee(data): Observable<any> {
        console.log("data", data);
        return this.http.post("https://2f3299cb.ngrok.io/login", data)
    }
}
