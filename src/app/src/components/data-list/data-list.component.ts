import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MicatuService } from '../../../core/services/micatu.service';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

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
  constructor(private service: MicatuService) { }

  ngOnInit() {
    this.getSalesAds();
  }

  getSalesAds(){
    this.service.getSalesAds().subscribe(response => {
      this.salesData = response;
      this.records = this.salesData.length;
    });
  }
}
