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

    // async getProducts(){
    //     let data = await this.http.get('https://jsonplaceholder.typicode.com/posts');
    //     console.log("dummy",);    
    //     return data;
    // }
}
