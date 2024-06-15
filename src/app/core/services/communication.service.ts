import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  public saleDetailData: ReplaySubject<any> = new ReplaySubject<any>(1);

  setData(data: any): void {
    this.saleDetailData.next(data);
  }

  getData$(): Observable<string> {
    return this.saleDetailData.asObservable();
  }
}
