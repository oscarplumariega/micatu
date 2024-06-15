import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MicatuService } from '../../../core/services/micatu.service';
import { AsyncPipe } from '@angular/common';
import { DUIPaginator } from "david-ui-angular";
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';
import { CommunicationService } from '../../../core/services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [AsyncPipe, DUIPaginator, SaleDetailComponent],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent{
  salesData: any;
  records!: any;
  pageRecords!: any;
  recordsPerPage = 10;
  totalPages!: any;
  numberOfPages: any = [];
  
  subscription!: Subscription;
  saleToSend!: any;

  constructor(private service: MicatuService, private c_service: CommunicationService) { }

  ngOnInit() {
    this.getSalesAds();

    window.onload = (event) => {
      let el = document.getElementById("1");
      if (el !== null) {
        el.style.backgroundColor = "#007bff";
      }
    };
  }

  getSalesAds() {
    this.service.getSalesAds().subscribe(response => {
      this.salesData = response;
      this.records = this.salesData.length;
      this.pageRecords = this.salesData.slice(0, this.recordsPerPage);
      this.totalPages = this.records / this.recordsPerPage;

      for (let i = 1; i <= this.totalPages; i++) {
        this.numberOfPages.push(i);
      }
    });
  }

  goToPage(nextPage: number) {
    this.pageRecords = this.salesData.slice((nextPage - 1) * this.recordsPerPage, nextPage * this.recordsPerPage);
    for (let i = 0; i <= this.totalPages; i++) {
      let el = document.getElementById(`${i}`);
      if (el !== null) {
        el.style.backgroundColor = "rgb(31,41,55)";

        if (i == nextPage) {
          let el = document.getElementById(`${nextPage}`);
          if (el !== null) {
            el.style.backgroundColor = "#007bff";
          }
        }
      }
    }
    document.body.scrollIntoView();
  }

  btnClick(sale: any){
    this.c_service.setData(sale);
  }

}
