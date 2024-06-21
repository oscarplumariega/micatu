import { Routes } from '@angular/router';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { MainComponent } from './components/main/main.component';
import { AddNewAdComponent } from './components/add-new-ad/add-new-ad.component';

export const routes: Routes = [
    {path: '', title: 'Home', component: MainComponent},
    {path: 'ads/:type', title: 'Sales', component: DataListComponent},
    {path: 'ads/:type', title: 'Rents', component: DataListComponent},
    {path: 'sale-detail', title: 'Sale Detail', component: SaleDetailComponent},
    {path: 'upload-ad', title: 'Upload Ad', component: AddNewAdComponent},
];
