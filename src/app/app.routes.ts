import { Routes } from '@angular/router';
import { SaleDetailComponent } from './src/components/sale-detail/sale-detail.component';
import { DataListComponent } from './src/components/data-list/data-list.component';

export const routes: Routes = [
    {path: '', title: 'Home', component: DataListComponent},
    {path: 'sale-detail', title: 'Sale Detail', component: SaleDetailComponent}
];
