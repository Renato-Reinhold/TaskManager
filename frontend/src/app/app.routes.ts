import { Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductsComponent} from './components/products/products.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {MediaComponent} from './components/media/media.component';
import {SettingsComponent} from './components/settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'media', component: MediaComponent },
    { path: 'settings', component: SettingsComponent }
];
