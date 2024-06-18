import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicatuService {
  apiUrl = 'https://66685043f53957909ff77b8c.mockapi.io/micatu/api';
  constructor(private http: HttpClient) { }

  getSalesAds() {
    return this.http.get(`${this.apiUrl}/sales_ads`);
  }
  getRentsAds() {
    return this.http.get(`${this.apiUrl}/rents_ads`);
  }
}
