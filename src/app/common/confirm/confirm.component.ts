import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private router:Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  logout(){
    this.cookie.delete("username");
    this.router.navigate(['/login']);
  }

}
