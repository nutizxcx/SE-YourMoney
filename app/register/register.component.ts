import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Server } from '../const/server';
import { YourMoneyService } from '../service/your-money.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isFormValid = false;
  responseStr: string;
  public regisForm: FormGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      career: new FormControl('',[Validators.required]),
      income_p_m: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confPw: new FormControl('',[Validators.required])
  });

  constructor(private service: YourMoneyService) { }

  ngOnInit() {

  }

  public feedbackStr:string ;

  formValidation(){
    console.log(this.regisForm.value);


    if(this.regisForm.invalid){   //ถ้ากรอกฟอร์มยังไม่ครบ
      this.responseStr = 'โปรดกรอกรายละเอียดให้ครบถ้วน' ;
      if(this.regisForm.get('password').valid  && this.regisForm.get('confPw').valid ){ //ถ้ากรอกรหัสผ่านครบสองช่อง
        if ( this.regisForm.get('password').value !== this.regisForm.get('confPw').value){  //รหัสไม่ผ่านตรงกัน
          this.responseStr = 'โปรดระบุรหัสผ่านให้ตรงกับยืนยันรหัสผ่าน';
          this.regisForm.patchValue({
            confPw: '',
            password: ''
          });
          this.isFormValid = false;
        }
      }else{  //ถ้ากรอกรหัสผ่านไม่ครบสองช่อง
        this.regisForm.patchValue({
          confPw: '',
          password: ''
        });
        this.responseStr = 'โปรดกรอกรายละเอียดให้ครบถ้วน' ;
        this.isFormValid = false;
      }

    } else {    //ถ้ากรอกฟอร์มครบแล้ว
      if ( this.regisForm.get('password').value !== this.regisForm.get('confPw').value){  //รหัสผ่านไม่ตรงกัน
        this.responseStr = 'โปรดระบุรหัสผ่านให้ตรงกับยืนยันรหัสผ่าน';
        this.regisForm.patchValue({
          confPw: '',
          password: ''
        });
        this.isFormValid = false;
      } else {  //รหัสผ่านตรงกัน
        this.responseStr = '';
        this.isFormValid = true;
      }
    }

    console.log(this.isFormValid);
  }

  onSubmit(){
    this.formValidation();
    if(this.isFormValid == true){
      this.service.postAPIService(Server.url, JSON.stringify(this.regisForm.value))
      .subscribe(
        res => {
          console.log(res);
          if(res == 'both already used'){
            this.feedbackStr = 'ชื่อผู้ใช้ และemail นี้ถูกใช้งานแล้ว กรุณากรอกข้อมูลใหม่';
            document.getElementById("openModalButton").click();
            this.regisForm.patchValue({
              username: '',
              email: ''
            });
            this.isFormValid = false;
          }else if( res == 'this email already used'){
            this.feedbackStr = 'email นี้ถูกใช้งานไปแล้ว กรุณากรอกข้อมูลใหม่';
            document.getElementById("openModalButton").click();
            this.regisForm.patchValue({
              email: ''
            });
            this.isFormValid = false;
          } else if( res == 'this username already used'){
            this.feedbackStr = 'ชื่อผู้ใช้นี้ถูกใช้งานไปแล้ว กรุณากรอกข้อมูลใหม่';
            document.getElementById("openModalButton").click();
            this.regisForm.patchValue({
              username: ''
            });
            this.isFormValid = false;
          }else{
            this.feedbackStr = 'การลงทะเบียนเสร็จสมบูรณ์';
            document.getElementById("openModalButton").click();

          }
        }, err => {
          console.log(err);
        }
      );
    } else {

    }
  }

}
