import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MicatuService } from '../../../core/services/micatu.service';
import { AsyncPipe } from '@angular/common';
import { DUIPaginator } from "david-ui-angular";
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';
import { CommunicationService } from '../../../core/services/communication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [AsyncPipe, DUIPaginator, SaleDetailComponent, ToolbarComponent],
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

  constructor(private service: MicatuService, private c_service: CommunicationService, private router: Router) { }

  ngOnInit() {
    
    let path = this.router.routerState.snapshot.url;
    
    if(path.includes('sales')){
      this.getAds('sales');
    }else{
      this.getAds('rents');
    }

    window.onload = (event) => {
      let el = document.getElementById("1");
      if (el !== null) {
        el.style.backgroundColor = "#007bff";
      }
    };
  }

  getAds(n:string) {
    if(n.includes("sales")){
      this.service.getSalesAds().subscribe(response => {
        this.salesData = response;
        this.records = this.salesData.length;
        this.pageRecords = this.salesData.slice(0, this.recordsPerPage);
        this.totalPages = this.records / this.recordsPerPage;
  
        for (let i = 1; i <= this.totalPages; i++) {
          this.numberOfPages.push(i);
        }
      });
    }else{
      this.service.getRentsAds().subscribe(response => {
        this.salesData = response;
        this.records = this.salesData.length;
        this.pageRecords = this.salesData.slice(0, this.recordsPerPage);
        this.totalPages = this.records / this.recordsPerPage;
  
        for (let i = 1; i <= this.totalPages; i++) {
          this.numberOfPages.push(i);
        }
      });
    }
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
    this.router.navigate(['/sale-detail'])
  }

}
