import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { Location } from '@angular/common';
import { isFulfilled } from 'q';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  public profileData = [{username: 'wait'}];
  public bankAccountData;
  public monthlyFeeData;
  public requestData;
  public haveBankAccountData = true;
  public haveMonthlyFeeData = true;
  public url;
  public username;
  constructor(private route: ActivatedRoute, private service: YourMoneyService, private location: Location) {
    this.username = this.route.snapshot.paramMap.get('accountDetail');
    location.replaceState('/account-detail');
  }

  ngOnInit() {
    // console.log(this.username);
    this.requestData = {username:this.username, mode:1 };
    this.service.postAPIService(Server.url, JSON.stringify(this.requestData))   //get profileData
    .subscribe(
      res => {
        console.log(res);
        this.profileData = res;
        this.url = '/account-detail/' + this.username;
        this.location.replaceState(this.url);

      }, err => {
        console.log(err);
      }
    );

    this.requestData = {username:this.username, mode:2 };
    this.service.postAPIService(Server.url, JSON.stringify(this.requestData))  //get bankAccountData
    .subscribe(
      res => {
        console.log(res);
        this.bankAccountData = res;
        // console.log(this.bankAccountData);
        console.log(this.bankAccountData === 'empty' );
        if(this.bankAccountData === 'empty' ){
          this.haveBankAccountData = false;
        }

      }, err => {
        console.log(err);
      }
    );

    this.requestData = {username:this.username, mode:3 };
    this.service.postAPIService(Server.url, JSON.stringify(this.requestData)) //get monthlyFeeData
    .subscribe(
      res => {
        console.log(res);
        this.monthlyFeeData = res;
        if(this.monthlyFeeData == 'empty' ){
          this.haveMonthlyFeeData = false;
        }

      }, err => {
        console.log(err);
      }
    );
  }




}
