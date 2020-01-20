import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {
  showFiller = false;
  constructor(private cookie: CookieService) { }

  ngOnInit() {
  }


  logout(){
    this.cookie.delete("username");
  }
}
