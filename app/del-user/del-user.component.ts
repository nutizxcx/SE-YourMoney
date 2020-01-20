import { Component, OnInit } from '@angular/core';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-del-user',
  templateUrl: './del-user.component.html',
  styleUrls: ['./del-user.component.css']
})
export class DelUserComponent implements OnInit {

  public i;
  public userToDel;
  public isSelect = false;
  public accountAmount;
  public updateTime;
  public isClick = false;
  public accounts;
  public accountDetail;
  public data;



  constructor(private service: YourMoneyService, private router: Router) { }

  ngOnInit() {
    this.service.getAPIService(Server.url)
    .subscribe(
      res => {
        this.accountAmount = res.length;
        // console.log(res);
        this.accounts = res;
      }, err =>{
        console.log(err);
      }
    );
  }

  delUser(){
    this.userToDel = this.accounts.filter(function(account){
        return account.selected == true;
    });
    console.log(this.userToDel);
    this.userToDel = { data: this.userToDel, mode:1 }
    console.log(this.userToDel);
    this.service.postAPIService(Server.url, JSON.stringify(this.userToDel))
    .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );

  }

  accountInfo(username){
    let check: boolean = false;
    this.router.navigate(['/account-detail',username]);
    // this.router.navigate(['/account-detail', username]);
    

  }

  // sendData(){
  //   window.location.href='/account-detail';
  // }


}
