import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';



@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {

  responseStr = '';
  isFormValid = false;
  forgotForm = new FormGroup ({
    email : new FormControl('', [Validators.required])
  });

  constructor( private service : YourMoneyService) { }

  ngOnInit() {
  }

  formValid() {
    console.log(this.forgotForm.value);
    if (this.forgotForm.valid) {
      this.isFormValid = true;
      this.responseStr = '';
    } else {
      this.isFormValid = false;
      this.responseStr = 'โปรดกรอกข้อมูลให้ครบถ้วน';
    }
    console.log(this.isFormValid);
  }

  onSubmit(){
    this.formValid();
    if (this.isFormValid) {
      this.service.postAPIService(Server.url, JSON.stringify(this.forgotForm.value))
      .subscribe(
        res => {
          console.log('this is ok');
          console.log(res);

        },err => {
          console.log('this is not ok');
          console.log(err);
        }
      );
    }
  }

}
