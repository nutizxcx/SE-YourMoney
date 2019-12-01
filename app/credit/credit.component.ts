import { Component, OnInit } from '@angular/core';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  title = 'Credit';
  public allCredit;
  constructor(private servie:YourMoneyService, private cookie: CookieService) { }

  ngOnInit() {
    this.servie.postAPIService(Server.url, JSON.stringify(this.cookie.get('username')))
    .subscribe(
      res =>{
          console.log(res);
          this.allCredit = res;
      }, err =>{
          console.log(err);
      }
    );
  }

}
