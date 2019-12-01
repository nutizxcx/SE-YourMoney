import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YourMoneyService } from './service/your-money.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CookieService } from 'ngx-cookie-service';
import { DelUserComponent } from './del-user/del-user.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { ConfirmComponent } from './common/confirm/confirm.component';
import { SidenavAutosizeExampleComponent } from './common/sidenav-autosize-example/sidenav-autosize-example.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminSidenavComponent } from './common/admin-sidenav/admin-sidenav.component';
import { AddMonthlyFeeComponent } from './add-monthly-fee/add-monthly-fee.component';
import { EditMonthlyFeeComponent } from './edit-monthly-fee/edit-monthly-fee.component';
import { MonthlyFeeComponent } from './monthly-fee/monthly-fee.component';
import { AdminDetailMonthlyfeeComponent } from './admin-detail-monthlyfee/admin-detail-monthlyfee.component';
import { AdminSumMonthlyfeeComponent } from './admin-sum-monthlyfee/admin-sum-monthlyfee.component';
import { AddNewCreditComponent } from './add-new-credit/add-new-credit.component';
import { AdminCreditComponent } from './admin-credit/admin-credit.component';
import { AdminCreditCheckUserComponent } from './admin-credit-check-user/admin-credit-check-user.component';
import { CreditComponent } from './credit/credit.component';
import { EditCreditComponent } from './edit-credit/edit-credit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
    EditProfileComponent,
    DelUserComponent,
    AccountDetailComponent,
    ConfirmComponent,
    SidenavAutosizeExampleComponent,
    AdminSidenavComponent,
    AddMonthlyFeeComponent,
    EditMonthlyFeeComponent,
    MonthlyFeeComponent,
    AdminDetailMonthlyfeeComponent,
    AdminSumMonthlyfeeComponent,
    AddNewCreditComponent,
    AdminCreditComponent,
    AdminCreditCheckUserComponent,
    CreditComponent,
    EditCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AccordionModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [YourMoneyService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
