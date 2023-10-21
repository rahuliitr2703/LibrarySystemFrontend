import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { EmailOtpOptionComponent } from './login/email-otp-option/email-otp-option.component';
import { LoginOptionComponent } from './login/login-option/login-option.component';
import { UsernamePasswordOptionComponent } from './login/username-password-option/username-password-option.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginOptionComponent },
  { path: 'usernamePasswordOption', component: UsernamePasswordOptionComponent },
  { path: 'emailOtpOption', component: EmailOtpOptionComponent },
  { path: 'buyerDashboard', component: BuyerDashboardComponent },
  { path: 'sellerDashboard', component: SellerDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }