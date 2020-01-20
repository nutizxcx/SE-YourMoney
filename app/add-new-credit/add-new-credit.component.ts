import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';

@Component({
  selector: 'app-add-new-credit',
  templateUrl: './add-new-credit.component.html',
  styleUrls: ['./add-new-credit.component.css']
})
export class AddNewCreditComponent implements OnInit {

  CreditForm: FormGroup;
  responseStr;
  isValid0 = true;
  isValid1 = true;
  isValid2 = true;
  isValid3 = true;
  isValid4 = true;
  isValid5 = true;
  isValid6 = true;
  data;
  submit = false;
  enable = false;


  constructor(private service: YourMoneyService) {
    this.CreditForm = new FormGroup({
    typeCredit: new FormControl("",[Validators.required]),
    nameCredit: new FormControl("",[Validators.required]),
    nameBank: new FormControl("",[Validators.required]),
    Time: new FormControl("",[Validators.required]),
    LimitRate: new FormControl("",[Validators.required]),
    Minimumincome: new FormControl("",[Validators.required]),
    Interest: new FormControl("",[Validators.required])
  })
}

  ngOnInit() {
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
    if(this.CreditForm.valid){
      this.submit = true;
    }
    else{
      this.submit = false;
    }

  }

  addCredit(){
    console.log(this.CreditForm.value);
    this.service.postAPIService(Server.url, JSON.stringify(this.CreditForm.value))
    .subscribe(
      res => {
        console.log(res);
      }, err =>{
        console.log(err);
      }
    );
  }


}
