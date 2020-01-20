import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YourMoneyService } from '../service/your-money.service';
import { CookieService } from 'ngx-cookie-service';
import { Server } from '../const/server';
import { Location } from '@angular/common';
import { stringify } from 'querystring';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-monthly-fee',
  templateUrl: './edit-monthly-fee.component.html',
  styleUrls: ['./edit-monthly-fee.component.css']
})
export class EditMonthlyFeeComponent implements OnInit {

  monthlyfeeForm: FormGroup;
  isValid1 = true;
  isValid2 = true;
  isValid3 = true;
  isValid4 = true;
  public data;
  submit = false;
  enable = false;
  feeId: any;
  monthly_fee_detail = {fee_name:'', fee_price: 0};
  url;
  constructor(private service:YourMoneyService, private cookie:CookieService, private location: Location, private route: ActivatedRoute) {
    this.feeId = this.route.snapshot.paramMap.get('feeId');
    location.replaceState('/edit-monthly-fee');
    this.monthlyfeeForm = new FormGroup({
      typeMonthlyfee: new FormControl("",[Validators.required]),
      nameMonthlyfee: new FormControl("",[Validators.required]),
      valueMonthlyfee: new FormControl("",[Validators.required]),
      dateMonthlyfee: new FormControl("",[Validators.required])
  })
}

  ngOnInit() {
    this.data = {username: this.cookie.get('username'), fee_id: this.feeId, mode: 2};
    console.log("request data: " + this.data.fee_id);
    this.service.postAPIService(Server.url, JSON.stringify(this.data))
    .subscribe(
      res => {
        console.log(res);
        this.monthly_fee_detail = res;
        this.url = '/edit-monthly-fee/' + this.feeId;
        this.location.replaceState(this.url);
      },err => {
        console.log(err);
      }
    )
  }

  edit_monthly_fee(){
    this.url = '/edit-monthly-fee/';
    this.location.replaceState(this.url);
    this.data = {username: this.cookie.get('username'),
                 fee_period: this.monthlyfeeForm.get('dateMonthlyfee').value,
                 fee_type: this.monthlyfeeForm.get('typeMonthlyfee').value,
                 fee_id: this.feeId ,
                 fee_name: this.monthlyfeeForm.get('nameMonthlyfee').value,
                 fee_price: this.monthlyfeeForm.get('valueMonthlyfee').value ,
                 mode: 1};
    console.log(this.data);
    this.service.postAPIService(Server.url, JSON.stringify(this.data))
    .subscribe(
      res => {
          console.log(res);
          this.url = '/edit-monthly-fee/' + this.feeId;
        this.location.replaceState(this.url);
      }, err => {
          console.log(err);
      }
    );
  }


  formDisable(){
    if(this.monthlyfeeForm.get('typeMonthlyfee').invalid){
      this.isValid4= false;
      this.enable = false;
    }
    else{
      this.isValid4= true;
      this.enable = true;
    }
  }
  formValidation(){

    if(this.monthlyfeeForm.get('nameMonthlyfee').invalid){
      this.isValid1 = false;
    }else{
      this.isValid1 = true;
    }
    if (this.monthlyfeeForm.get('valueMonthlyfee').invalid) {
      this.isValid2 = false;
    }else{
      this.isValid2 = true;
    }
    if (this.monthlyfeeForm.get('dateMonthlyfee').invalid) {
      this.isValid3 = false;
    }
    else{
      this.isValid3 = true;
    }
    if(this.monthlyfeeForm.valid){
      this.submit = true;
    }
    else{
      this.submit = false;
    }

  }
}
