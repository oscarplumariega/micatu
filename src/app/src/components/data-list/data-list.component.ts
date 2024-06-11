import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MicatuService } from '../../../core/services/micatu.service';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [AsyncPipe, MainContainerComponent, MatCardModule, MatGridListModule, MatPaginatorModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  salesData: any;
  records!: number;
  recordsPerPage = 8;
  pagedList: any= [];
  constructor(private service: MicatuService) { }

  ngOnInit() {
    this.getSalesAds();
  }

  getSalesAds(){
    this.service.getSalesAds().subscribe(response => {
      this.salesData = response;
      this.records = this.salesData.length;
      this.pagedList = this.salesData.slice(0, this.recordsPerPage);
    });
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.records){
      endIndex = this.records;
    }
    this.pagedList = this.salesData.slice(startIndex, endIndex);
  }

}
