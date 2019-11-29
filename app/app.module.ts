import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMonthlyFeeComponent } from './edit-monthly-fee/edit-monthly-fee.component';
import { MonthlyFeeComponent } from './monthly-fee/monthly-fee.component';
import { AddMonthlyFeeComponent } from './add-monthly-fee/add-monthly-fee.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AdminSumMonthlyfeeComponent } from './admin-sum-monthlyfee/admin-sum-monthlyfee.component';
import { AdminDetailMonthlyfeeComponent } from './admin-detail-monthlyfee/admin-detail-monthlyfee.component';



@NgModule({
  declarations: [
    AppComponent,
    EditMonthlyFeeComponent,
    MonthlyFeeComponent,
    AddMonthlyFeeComponent,
    AdminSumMonthlyfeeComponent,
    AdminDetailMonthlyfeeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);