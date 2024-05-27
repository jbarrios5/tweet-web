import { Component } from '@angular/core';
import { UserGetRes } from 'src/app/auth/interfaces/user.interface';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.css']
})
export class HomeSummaryComponent {
  totalFollowed:number  = 0;
  totalFollowers:number = 0;
  totalTweet:number   = 0;
  
  
  constructor(private dashboardService:DashboardService){
    console.log(this.dashboardService.users);
    const user:UserGetRes[] = this.dashboardService.users?.data.filter( res => res.userName === localStorage.getItem('userName')) || []
    this.totalFollowed = user[0].followed;
    this.totalFollowers = user[0].followers;

  }
  

}
