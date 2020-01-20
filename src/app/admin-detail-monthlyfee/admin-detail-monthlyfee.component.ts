import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';

@Component({
  selector: 'app-admin-detail-monthlyfee',
  templateUrl: './admin-detail-monthlyfee.component.html',
  styleUrls: ['./admin-detail-monthlyfee.component.css']
})
export class AdminDetailMonthlyfeeComponent implements OnInit {

  public url;
  public selectedType;
  public data;
  public mf_amount;
  public isEmpty = false;

  constructor(private route: ActivatedRoute, private location: Location, private service: YourMoneyService) {
    this.selectedType = this.route.snapshot.paramMap.get('selectType');
    location.replaceState('/admin-detail-monthlyfee');
  }

  ngOnInit() {
    this.service.postAPIService(Server.url, JSON.stringify(this.selectedType))
    .subscribe(
      res => {
        console.log(res);
        this.data = res;
        if(this.data[0].length==0){
          this.mf_amount = 0;
          this.isEmpty = true;
        }else{
          this.mf_amount = res.length;
          this.isEmpty = false;
        }
        this.url = '/admin-detail-monthlyfee/' + this.selectedType;
        this.location.replaceState(this.url);
      }, err =>{
        console.log(err);
      }
    );

  }

}
