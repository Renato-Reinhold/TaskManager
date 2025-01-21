import { Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductsComponent} from './components/products/products.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {MediaComponent} from './components/media/media.component';
import {SettingsComponent} from './components/settings/settings.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'media', component: MediaComponent },
    { path: 'settings', component: SettingsComponent }
];
