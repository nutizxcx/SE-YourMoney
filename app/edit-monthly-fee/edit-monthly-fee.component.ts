import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-monthly-fee',
  templateUrl: './edit-monthly-fee.component.html',
  styleUrls: ['./edit-monthly-fee.component.css']
})
export class EditMonthlyFeeComponent implements OnInit {

  monthlyfeeForm: FormGroup;
  responseStr;
  isValid1 = true;
  isValid2 = true;
  isValid3 = true;
  isValid4 = true;
  modal;
  submit = false;
  enable = false;

  constructor() { 
    this.monthlyfeeForm = new FormGroup({
      nameMonthlyfee: new FormControl("",[Validators.required]),
      valueMonthlyfee: new FormControl("",[Validators.required]),
      dateMonthlyfee: new FormControl("",[Validators.required])
  })
}

  ngOnInit() {
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
