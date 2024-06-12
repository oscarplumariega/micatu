import { Component } from '@angular/core';
import { MicatuService } from '../../../core/services/micatu.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  salesData: any;
  records!: number;
  pageRecords!: any;
  recordsPerPage = 10;
  totalPages!: any;
  constructor(private service: MicatuService) { }

  ngOnInit() {
    this.getSalesAds();
  }

  getSalesAds(){
    this.service.getSalesAds().subscribe(response => {
      this.salesData = response;
      this.records = this.salesData.length;
      this.pageRecords = this.salesData.slice(0, this.recordsPerPage); 
      this.totalPages = this.salesData / this.recordsPerPage;
    });
  }

}
