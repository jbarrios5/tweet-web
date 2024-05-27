import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
 
  
  
  
  public finishedGetUsers:boolean = false;
  public finishedGetFollowersAndFollowed:boolean = false;
  public userName:string = ''
  constructor(private dashboardService:DashboardService){
   

  }
  ngOnInit(): void {
    forkJoin({
      follows: this.dashboardService.getFollowAndFollower(),
      users: this.dashboardService.getUser(),
    }).subscribe(({ follows, users }) => {
      if (follows) {
        this.finishedGetFollowersAndFollowed = true;
      }
      if (users) 
        this.finishedGetUsers = true;
      
    });
   this.getUsers()
   this.userName = localStorage.getItem('userName') || ''
  }
  
  getUsers():void{
    this.dashboardService.getUser()
    .subscribe( res => { this.finishedGetUsers = true}
    )
  }

  getFollowAndFollower():void{
    this.dashboardService.getFollowAndFollower()
    .subscribe(res => this.finishedGetFollowersAndFollowed = true )
  }

  
  


  
  
}
