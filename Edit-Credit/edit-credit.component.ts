import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-credit',
  templateUrl: './edit-credit.component.html',
  styleUrls: ['./edit-credit.component.css']
})
export class EditCredit implements OnInit {

  CreditForm: FormGroup;
  responseStr;
  isValid0 = true;
  isValid1 = true;
  isValid2 = true;
  isValid3 = true;
  isValid4 = true;
  isValid5 = true;
  isValid6 = true;
  modal;
  submit = false;
  enable = false;


  constructor() {
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

}