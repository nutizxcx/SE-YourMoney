import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DelUserComponent } from './del-user/del-user.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { ConfirmComponent } from './common/confirm/confirm.component';
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
import { SidenavAutosizeExampleComponent } from './common/sidenav-autosize-example/sidenav-autosize-example.component';


const routes: Routes = [
  {path: '',  redirectTo: '/login', pathMatch: 'full'},
  {path: 'conf',  component: ConfirmComponent},
  {path: 'add-monthly-fee',  component: AddMonthlyFeeComponent},
  {path: 'admin-sum-monthlyfee',  component: AdminSumMonthlyfeeComponent},
  {path: 'monthly-fee',  component: MonthlyFeeComponent},
  {path: 'admin-detail-monthlyfee/:selectType',  component: AdminDetailMonthlyfeeComponent},
  {path: 'edit-monthly-fee/:feeId',  component: EditMonthlyFeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-pw', component: ForgotPwComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'delete-user', component: DelUserComponent},
  {path: 'account-detail/:accountDetail', component: AccountDetailComponent},
  {path: 'add-new-credit' , component: AddNewCreditComponent},
  {path: 'admin-credit' , component: AdminCreditComponent},
  {path: 'admin-credit-check-user/:creditDetail' , component: AdminCreditCheckUserComponent},
  {path: 'credit', component: CreditComponent},
  {path: 'edit-credit/:creditID', component:EditCreditComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
