import { Component } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.css']
})
export class HomeSummaryComponent {
  totalDebitMonth:number  = 0;
  totalCreditMonth:number = 0;
  currentBalance:number   = 0;
  
  
  constructor(private dashboardService:DashboardService){
    console.log('En el constructor');
    this.totalCreditMonth = 1000;
    this.totalDebitMonth = 20000;

  }
  

}
