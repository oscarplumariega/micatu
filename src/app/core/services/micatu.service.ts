import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicatuService {
  apiUrl = 'https://66685043f53957909ff77b8c.mockapi.io/micatu/api';
  apiNest = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getSalesAds() {
    return this.http.get(`${this.apiUrl}/sales_ads`);
  }
  getRentsAds() {
    return this.http.get(`${this.apiUrl}/rents_ads`);
  }
  getAds(){
    return this.http.get(`${this.apiNest}/ads`);
  }
  postAd(ad: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.apiNest}/ads`,JSON.stringify(ad), {headers: headers});
  }

}
