import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';
import { AddNewAdComponent } from './components/add-new-ad/add-new-ad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataListComponent, ToolbarComponent, SaleDetailComponent, RouterOutlet, AddNewAdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'micatu';

}
