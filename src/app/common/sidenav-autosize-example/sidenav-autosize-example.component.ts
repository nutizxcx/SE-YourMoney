import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-sidenav-autosize-example',
  templateUrl: './sidenav-autosize-example.component.html',
  styleUrls: ['./sidenav-autosize-example.component.css']
})

export class SidenavAutosizeExampleComponent implements OnInit {

  showFiller = false;
  username;
  path;
  constructor(private router: Router, private cookie: CookieService, private route: ActivatedRoute, private location: Location) {
   }


  ngOnInit() {
    this.username = this.cookie.get('username');

  }

  logout(){
    this.cookie.delete("username");
  }



}
