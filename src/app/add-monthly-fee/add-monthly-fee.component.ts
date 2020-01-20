import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';

@Component({
  selector: 'app-add-monthly-fee',
  templateUrl: './add-monthly-fee.component.html',
  styleUrls: ['./add-monthly-fee.component.css']
})
export class AddMonthlyFeeComponent implements OnInit {

  monthlyfeeForm: FormGroup;
  isValid1 = true;
  isValid2 = true;
  isValid3 = true;
  isValid4 = true;
  submit = false;
  enable = false;
  data;


  constructor(private cookie: CookieService, private service: YourMoneyService) {
    this.monthlyfeeForm = new FormGroup({
    nameMonthlyfee: new FormControl("",[Validators.required]),
    valueMonthlyfee: new FormControl("",[Validators.required]),
    dateMonthlyfee: new FormControl("",[Validators.required]),
    typeMonthlyfee: new FormControl("",[Validators.required])
  })
}

  ngOnInit() {
  }

  add_monthly_fee(){

    this.data = {username: this.cookie.get('username'),
                 fee_type: this.monthlyfeeForm.get('typeMonthlyfee').value,
                 fee_name: this.monthlyfeeForm.get('nameMonthlyfee').value,
                 fee_period: this.monthlyfeeForm.get('dateMonthlyfee').value,
                 fee_price: this.monthlyfeeForm.get('valueMonthlyfee').value};
    console.log(this.data);
    this.service.postAPIService(Server.url, JSON.stringify(this.data))
    .subscribe(
      res =>{
        console.log(res);
      },err =>{
        console.log(err);
      }
    );
  }


  formConfirm(){
    if(this.monthlyfeeForm.valid){
      this.submit = true;
    }
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
