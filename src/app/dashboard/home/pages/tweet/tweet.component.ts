import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFollowDTO, UserFollowedDTO, UserGetRes } from 'src/app/auth/interfaces/user.interface';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';
import { TweetGetRes, TweetPostReq, TweetPostReqData } from 'src/app/tweet/interface/tweet.interface';
import { TweetService } from 'src/app/tweet/service/tweet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  totalFollowed:number  = 0;
  totalFollowers:number = 0;
  totalTweet:number   = 0;
  public followersDTO:UserFollowDTO[] = [];
  public followedDTO: UserFollowedDTO [] = []
  tweets:TweetGetRes[] = []
  
  tweetForm = new FormGroup({
    tweet: new FormControl('',Validators.required)}
  )

  constructor(private dashboardService:DashboardService, private router:Router,private tweetService:TweetService){
    this.getAllData()
    
  }

  getAllData():void{
    this.followersDTO =  this.dashboardService.followedAndFollowers?.data.followers || []
    this.followedDTO = this.dashboardService.followedAndFollowers?.data.followed || []
    this.getTweets()
  }
  onProfile(userName:string):void{

    this.router.navigateByUrl(`/tweet/profile/${userName}`)
    
  }
  onFollow(id:number):void{
    this.dashboardService.onFollow(id)
    .subscribe(res => {
      if(res.data.isInsertedTweet){
        Swal.fire({
          title: "Usuario ",
          text: 'Usuario seguido!',
          icon: "success",
        }).then( res =>{

          window.location.reload()
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
  saveTweet():void{
    const{tweet} = this.tweetForm.value || ''

    if(tweet?.length  === 0 || tweet!.length > 200 ){
      Swal.fire({
        title: "Tweet ",
        text: 'El contendio del tweet no puede superar 200 caracteres',
        icon: "error",
      })

      return;
    }else{
      const tweetReqData: TweetPostReq = {content:tweet!}
      const TweetPostReqData:TweetPostReqData = {data:tweetReqData}
      this.tweetService.addTweet(TweetPostReqData)
      .subscribe(res => {if(res){
        Swal.fire({
          title: "Tweet ",
          text: 'Tweet publicado correctamente',
          icon: "success",
        })
      }
      window.location.reload()
    return;}
      )
    }


  }  
  getTweets():void{
    this.tweetService.getTwees(localStorage.getItem('userName') || '')
    .subscribe(res => {
      this.tweets = res.data
    }
    )
  }
}
