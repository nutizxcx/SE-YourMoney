import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthlyFeeComponent} from '../app/monthly-fee/monthly-fee.component';
import {AddMonthlyFeeComponent} from '../app/add-monthly-fee/add-monthly-fee.component';
import {EditMonthlyFeeComponent} from '../app/edit-monthly-fee/edit-monthly-fee.component';
import {AdminSumMonthlyfeeComponent} from '../app/admin-sum-monthlyfee/admin-sum-monthlyfee.component';
import {AdminDetailMonthlyfeeComponent} from '../app/admin-detail-monthlyfee/admin-detail-monthlyfee.component';
const routes: Routes = [
  {path:'monthly-fee', component: MonthlyFeeComponent},
  {path:'add-monthly-fee', component: AddMonthlyFeeComponent},
  {path:'edit-monthly-fee', component: EditMonthlyFeeComponent},
  { path: 'admin-sum-monthlyfee', component: AdminSumMonthlyfeeComponent},
  {path: 'admin-detail-monthlyfee', component: AdminDetailMonthlyfeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
