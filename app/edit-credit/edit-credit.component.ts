import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-credit',
  templateUrl: './edit-credit.component.html',
  styleUrls: ['./edit-credit.component.css']
})
export class EditCreditComponent implements OnInit {

  CreditForm: FormGroup;
  responseStr;
  isValid0 = true;
  isValid1 = true;
  isValid2 = true;
  isValid3 = true;
  isValid4 = true;
  isValid5 = true;
  isValid6 = true;
  creditID;
  reqData;
  url;
  data = {credit_name: ''};
  submit = true;
  enable = false;


  constructor(private route: ActivatedRoute, private service: YourMoneyService, private location: Location, private router: Router) {
    this.creditID = this.route.snapshot.paramMap.get('creditID');
    location.replaceState('/edit-credit');
    this.CreditForm = new FormGroup({
    typeCredit: new FormControl("",[Validators.required]),
    nameCredit: new FormControl("",[Validators.required]),
    nameBank: new FormControl("",[Validators.required]),
    Time: new FormControl("",[Validators.required]),
    LimitRate: new FormControl("",[Validators.required]),
    Minimumincome: new FormControl("",[Validators.required]),
    Interest: new FormControl("",[Validators.required])
  });
}

  ngOnInit() {
    this.reqData = {data: this.creditID, mode: 1};
    console.log('aaa' + this.reqData);
    this.service.postAPIService(Server.url, this.reqData)
    .subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.url = '/edit-credit/' + this.creditID;
        this.location.replaceState(this.url);
      }, err => {
        console.log(err);
      }
    );
  }

  saveEdit(){
    this.reqData = {data: this.CreditForm.value, credit_id: this.creditID , mode: 2};
    console.log(this.reqData);
    this.url = '/edit-credit';
    this.location.replaceState(this.url);
    this.service.postAPIService(Server.url, JSON.stringify(this.reqData))
    .subscribe(
      res => {
        console.log("res:  " + res);
        this.url = '/edit-credit/' + this.creditID;
        this.location.replaceState(this.url);
      }, err =>{
        console.log(err);
      }
    );
  }

  backToAdminCheckUser(backTo){
    this.router.navigate(['/admin-credit-check-user',backTo]);
  }

  formValidation(){

    if(this.CreditForm.get('typeCredit').invalid){
      this.isValid0 = false;
    }else{
      this.isValid0 = true;
    }
    if(this.CreditForm.get('nameCredit').invalid){
      this.isValid1 = false;
    }else{
      this.isValid1 = true;
    }
    if (this.CreditForm.get('nameBank').invalid) {
      this.isValid2 = false;
    }else{
      this.isValid2 = true;
    }
    if (this.CreditForm.get('Time').invalid) {
      this.isValid3 = false;
    }
    else{
      this.isValid3 = true;
    }
    if (this.CreditForm.get('LimitRate').invalid) {
      this.isValid4 = false;
    }
    else{
      this.isValid4 = true;
    }
    if (this.CreditForm.get('Minimumincome').invalid) {
      this.isValid5 = false;
    }
    else{
      this.isValid5 = true;
    }
    if (this.CreditForm.get('Interest').invalid) {
      this.isValid6 = false;
    }
    else{
      this.isValid6 = true;
    }
    // if(this.CreditForm.valid){
    //   this.submit = true;
    // }
    // else{
    //   this.submit = false;
    // }

  }



}
