import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicatuService {
  apiUrl = 'https://66685043f53957909ff77b8c.mockapi.io/micatu/api/sales_ads';
  constructor(private http: HttpClient) { }

  getSalesAds() {
    return this.http.get(this.apiUrl);
  }
}
