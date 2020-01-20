import { Component, OnInit } from '@angular/core';
import { YourMoneyService } from '../service/your-money.service';
import { Server } from '../const/server';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sum-monthlyfee',
  templateUrl: './admin-sum-monthlyfee.component.html',
  styleUrls: ['./admin-sum-monthlyfee.component.css']
})
export class AdminSumMonthlyfeeComponent implements OnInit {

  public monthly_types_amount;
  public monthly_types = [
                          {fee_type: 'เอนเตอร์เทนเม้นท์'}, {fee_type: 'ค่าโทรศัพท์'}, {fee_type: 'ค่าบัตรเครดิต'}, {fee_type: 'ค่าผ่อนชำระรถ'}, {fee_type: 'ค่าผ่อนชำระบ้าน'},
                          {fee_type: 'ค่าผ่อนชำระอื่น'}, {fee_type: 'ค่าประกัน'}, {fee_type: 'ค่าเช่า'}, {fee_type: 'ค่าสาธารณูปโภค'}, {fee_type: 'อื่นๆ'}
                          ];

  constructor(private service: YourMoneyService, private router: Router) { }

  ngOnInit() {
    this.service.getAPIService(Server.url)
    .subscribe(
      res => {
          this.monthly_types_amount = res['total_monthly_count'];
      }, err =>{
          console.log(err);
      }
    );
  }

  monthly_type_detail(fee_type){
    this.router.navigate(['/admin-detail-monthlyfee',fee_type]);
  }

}
