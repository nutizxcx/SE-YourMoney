import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public responseStr: string ;
  public isFormValid = false;
  public detail: Array<string> = [];
  public i =0;
  editForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      career: new FormControl('',[Validators.required]),
      income_p_m: new FormControl('',[Validators.required]),
  });


  constructor(private service: YourMoneyService,
              private cookie: CookieService) { }


  ngOnInit() {
    this.service.postAPIService(Server.url, this.cookie.get('username'))
    .subscribe(
      res => {
        console.log(res);
        console.log(res[0]);
        this.editForm.patchValue({
            firstName: res[0],
            lastName: res[1],
            career: res[2],
            income_p_m: res[3]
        });


      }, err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.editForm.value.username = this.cookie.get('username');
    console.log(JSON.stringify(this.editForm.value));
    this.service.postAPIService(Server.url, JSON.stringify(this.editForm.value))
    .subscribe(
      res => {
        console.log(res);
        }, err => {
          console.log(err);
        });


  }

}
