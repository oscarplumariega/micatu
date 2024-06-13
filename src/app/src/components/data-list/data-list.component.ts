import { Component } from '@angular/core';
import { MicatuService } from '../../../core/services/micatu.service';
import { AsyncPipe } from '@angular/common';
import { DUIPaginator  } from "david-ui-angular";

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [AsyncPipe, DUIPaginator],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  salesData: any;
  records!: any;
  pageRecords!: any;
  recordsPerPage = 10;
  totalPages!: any;
  numberOfPages: any = [];
  constructor(private service: MicatuService) { }

  ngOnInit() {
    this.getSalesAds();
  }

  getSalesAds(){
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

  goToPage(nextPage: number){
    this.pageRecords = this.salesData.slice((nextPage - 1) * this.recordsPerPage, nextPage * this.recordsPerPage);
  }



}
