import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [MainContainerComponent, MatCardModule, MatGridListModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

}
