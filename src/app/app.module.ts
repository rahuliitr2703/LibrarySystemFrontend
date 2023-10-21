import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginOptionComponent } from './login/login-option/login-option.component';
import { UsernamePasswordOptionComponent } from './login/username-password-option/username-password-option.component';
import { EmailOtpOptionComponent } from './login/email-otp-option/email-otp-option.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginOptionComponent,
    UsernamePasswordOptionComponent,
    EmailOtpOptionComponent,
    AdminDashboardComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
