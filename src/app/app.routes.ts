import { Routes } from '@angular/router';
import { SaleDetailComponent } from './src/components/sale-detail/sale-detail.component';
import { DataListComponent } from './src/components/data-list/data-list.component';
import { MainComponent } from './src/components/main/main.component';

export const routes: Routes = [
    {path: '', title: 'Home', component: MainComponent},
    {path: 'ads/:type', title: 'Sales', component: DataListComponent},
    {path: 'ads/:type', title: 'Rents', component: DataListComponent},
    {path: 'sale-detail', title: 'Sale Detail', component: SaleDetailComponent}
];
