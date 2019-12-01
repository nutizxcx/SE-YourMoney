import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-credit-check-user',
  templateUrl: './admin-credit-check-user.component.html',
  styleUrls: ['./admin-credit-check-user.component.css']
})
export class AdminCreditCheckUserComponent implements OnInit {
  title = 'Admin-Credit-CheckUser';
  public creditDetail;
  public url;
  public ownedUsers;
  public ownedUsers_amount = 0;
  public creditData = {};
  public reqData;
  constructor( private router:Router, private route: ActivatedRoute, private service: YourMoneyService, private location: Location) {
    this.creditDetail = this.route.snapshot.paramMap.get('creditDetail');
    location.replaceState('/admin-credit-check-user');
  }

  ngOnInit() {
    this.service.postAPIService(Server.url, JSON.stringify(this.creditDetail))
    .subscribe(
      res =>{
        this.creditData = res.splice(0,1)[0];
        this.ownedUsers = res;
        this.ownedUsers_amount = this.ownedUsers.length;
        this.url = '/admin-credit-check-user/' + this.creditDetail;
        this.location.replaceState(this.url);
      },err =>{
        console.log(err);
      }
    );
  }

  editCredit(creditID){
    this.router.navigate(['/edit-credit',creditID]);
  }

}
