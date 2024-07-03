import { Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component'
import { StocksComponent } from '../stocks/stocks.component';
import { MyaccountsComponent } from '../myaccounts/myaccounts.component';
import { MyreportsComponent } from '../myreports/myreports.component';
import { CreateFundComponent } from '../create-fund/create-fund.component';
import {AuthGuard} from '../user-auth-guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'stocks', component:StocksComponent, canActivate: [AuthGuard]},
  { path: 'my-account', component:MyaccountsComponent, canActivate: [AuthGuard]},
  { path: 'my-reports', component:MyreportsComponent, canActivate: [AuthGuard]},
  { path: 'create-fund', component:CreateFundComponent, canActivate: [AuthGuard]},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
];
