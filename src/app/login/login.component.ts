import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

import { Server } from "../const/server";
import { YourMoneyService } from "../service/your-money.service";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public feedbackStr: string;
  public isClickLogin = false;
  public isFormValid = false;
  responseStr: string;
  public form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  // public type = 'password';

  constructor(private service: YourMoneyService,
              private cookie: CookieService,
              private router: Router) {}

  ngOnInit() {}

  formValidation() {
    if (this.form.invalid) {
      this.responseStr = "โปรดกรอกข้อมูลให้ครบถ้วน";
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
      this.responseStr = "";
    }
    // console.log(this.isFormValid);
  }

  onSubmit(event: any): void {
    // event.preventDefault();
    this.formValidation();
    // console.log('form value = '+JSON.stringify(this.form.value));
    if (this.isFormValid === true) {
      this.service.postAPIService(Server.url, JSON.stringify(this.form.value)).subscribe(
        res => {
          // console.log(res);
          if (res) {
            this.cookie.set("username", this.form.get('username').value);

          }else{
            this.feedbackStr = "รหัสของคุณไม่ถูกต้อง โปรดลองอีกครั้ง";
            document.getElementById("openModalButton").click();
            this.form.patchValue({
              username: "",
              password: ""
            });
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
    }
  }

  displayLoginForm() {
    this.isClickLogin = true;
  }

  // show(){
  //   if(this.type == 'text'){
  //     this.type='password';
  //   }else{
  //       this.type='text';
  //   }

  // }
}
