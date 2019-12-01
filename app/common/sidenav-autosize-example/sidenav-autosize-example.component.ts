import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sidenav-autosize-example',
  templateUrl: './sidenav-autosize-example.component.html',
  styleUrls: ['./sidenav-autosize-example.component.css']
})

export class SidenavAutosizeExampleComponent implements OnInit {

  showFiller = false;
  username;
  constructor(private cookie: CookieService) { }


  ngOnInit() {
    this.username = this.cookie.get('username');
  }

  logout(){
    this.cookie.delete("username");
  }

}
