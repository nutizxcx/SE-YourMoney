import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YourMoney';
  public userType;

  constructor(private cookie: CookieService) {}

  ngOnInit(){
    console.log(this.cookie.get('username'));
    if(this.cookie.get('username') == ''){
      console.log('none');
      this.userType = 'none';
    }else if(this.cookie.get('username') == 'admin'){
      console.log('admin');
      this.userType = 'admin';
    }else {
      console.log('user');
      this.userType = 'user';
    }
  }



}
