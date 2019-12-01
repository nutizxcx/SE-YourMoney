import { Component, OnInit } from '@angular/core';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-credit',
  templateUrl: './admin-credit.component.html',
  styleUrls: ['./admin-credit.component.css']
})
export class AdminCreditComponent implements OnInit {
  title = 'Admin-Credit';
  public allCredit;
  public creditToDel;
  public creditAmount;
  public reqdata;

  constructor(private service: YourMoneyService, private router: Router) { }

  ngOnInit() {
    this.reqdata = { mode:1};
    this.service.postAPIService(Server.url, this.reqdata)
    .subscribe(
      res => {
        console.log(res);
        this.allCredit = res;
        this.creditAmount = this.allCredit.length;
      }, err =>{
        console.log(err);
      }
    );
  }

  delCredit(){
    this.creditToDel = this.allCredit.filter(function(credit){
        return credit.selected == true;
    });
    console.log(this.creditToDel);
    this.creditToDel = { data: this.creditToDel, mode:2 }
    console.log(this.creditToDel);
    this.service.postAPIService(Server.url, JSON.stringify(this.creditToDel))
    .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  creditInfo(credit){
    this.router.navigate(['/admin-credit-check-user',credit]);


  }

}
