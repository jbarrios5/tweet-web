import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserFollowDTO, UserFollowedDTO, UserGetRes } from 'src/app/auth/interfaces/user.interface';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';
import Swal from 'sweetalert2';
import { TweetGetRes } from '../../interface/tweet.interface';
import { TweetService } from '../../service/tweet.service';

@Component({
  selector: 'app-tweet-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  public userName:string = ''
  public userIsFollow:boolean = false;
  totalFollowers:number = 0
  totalFollowed: number = 0
  totalTweet:number = 0
  tweets:TweetGetRes[] = []
  constructor(private dashboardService:DashboardService,private route: ActivatedRoute,private tweetService:TweetService,private router:Router){
    this.dashboardService.getFollowAndFollower()
    this.dashboardService.getUser()
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userName = params.get('username') || '';
    });

    this.getFollowers()
    this.getTweets()
    this.userIsFollow = this.dashboardService.followedAndFollowers?.data.followed.find( us => us.userName === this.userName) ? true : false
  }

  getTweets():void{
    this.tweetService.getTwees(this.userName)
    .subscribe(res => {
      this.tweets = res.data
    }
    )
  }
  getFollowers():void{
    this.dashboardService.users?.data.forEach( res =>{
      console.log(res);
      
      if(res.userName === this.userName){
        this.totalFollowers = res.followers
        this.totalFollowed = res.followed
      }
    })
  }

  onFollow():void{
    const id = this.dashboardService.users?.data.find(use => use.userName === this.userName)?.id || 0
    
    this.dashboardService.onFollow(id)
    .subscribe(res => {
      if(res.data.isInsertedTweet){
        Swal.fire({
          title: "Usuario ",
          text: 'Usuario seguido!',
          icon: "success",
        }).then( res =>{
          this.router.navigateByUrl('/dashboard/resume')
          
        })
        
        return;
      }else{
        Swal.fire({
          title: "Usuario ",
          text: 'No se pudo seguir al  usuario',
          icon: "error",
        })
      }
    }
    )

  }
   

  

}
