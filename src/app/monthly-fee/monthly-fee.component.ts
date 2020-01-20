import { Component, OnInit } from '@angular/core';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-fee',
  templateUrl: './monthly-fee.component.html',
  styleUrls: ['./monthly-fee.component.css']
})
export class MonthlyFeeComponent implements OnInit {

  public monthly_fee;
  public isEmpty = false;
  public data;
  public fee_id_to_del;

  constructor(private service: YourMoneyService, private cookie: CookieService, private router: Router) { }

  ngOnInit() {
    this.data = {username:this.cookie.get('username'), mode:1};
    this.service.postAPIService(Server.url, JSON.stringify(this.data))
    .subscribe(
      res =>{
        console.log(res);
        this.monthly_fee = res;
        console.log('monthly fee : ' + this.monthly_fee[0].fee_period);

      }, err=>{
        console.log(err);
      }

    );
  }

  updateDataToDel(dataToDel){
    this.fee_id_to_del = dataToDel;
  }

  delMonthlyFee(fee_id){
    this.data = {username:this.cookie.get('username'), fee_id: this.fee_id_to_del , mode:2};
    this.service.postAPIService(Server.url, JSON.stringify(this.data))
    .subscribe(
      res =>{
        console.log(res);
      }, err=>{
        console.log(err);
      }

    );
  }

  chooseMonthlyFee(fee_id){
    this.router.navigate(['/edit-monthly-fee',fee_id]);

  }


}
