import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFollowDTO, UserFollowedDTO, UserGetRes } from 'src/app/auth/interfaces/user.interface';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

@Component({
  selector: 'app-tweet-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  totalFollowed:number  = 0;
  totalFollowers:number = 0;
  totalTweet:number   = 0;
  public users?:UserGetRes[];
  public filteredUsers: UserGetRes[] = [];
  public finishedGetUser:boolean = false
  searchForm = new FormGroup(
    {userNameForm: new FormControl('',[Validators.required])}
  )

  constructor(private dashboardService:DashboardService,private router:Router){

    this.getUsers()  
  }
  getUsers():void{
    console.log(localStorage.getItem('userName'));
    
    if(!this.dashboardService.users){
      this.dashboardService.getUser()
      .subscribe( res => {this.users= res.data.filter(us => us.userName !== localStorage.getItem('userName')) ; this.finishedGetUser =  true
    this.filteredUsers = this.users}
      )
    }else{
      this.users = this.dashboardService.users.data.filter(us => us.userName !== localStorage.getItem('userName'))
      this.finishedGetUser =  true
    }
    console.log(this.users);
    
    
  }  

  filterUsers(): void {
    const {userNameForm} = this.searchForm.value
    console.log(userNameForm);
    
    this.users = this.users!.filter(user => 
      user.userName.toLowerCase() === userNameForm)
    ;
  }
  clearSearch():void{
    this.users = this.filteredUsers
  }

  goToProfile(userName:string){
    this.router.navigateByUrl(`/tweet/profile/${userName}`)
  }

}
