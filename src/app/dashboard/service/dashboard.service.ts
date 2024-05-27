import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { UserFollowGetRes, UserFollowGetResData, UserGetResData } from 'src/app/auth/interfaces/user.interface';
import { environment } from 'src/environment/environment';
import { FollowerPostResData } from '../interface/tweet.interface';




@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUserUrl: string = environment.userBaseUrl;
  private readonly baseTweetUrl: string = environment.tweetBaseUrl;
  public users?:UserGetResData
  public followedAndFollowers?: UserFollowGetResData
  constructor(private httpClient:HttpClient) { }

  getUser():Observable<UserGetResData>{
    return this.httpClient.get<UserGetResData>(`${this.baseUserUrl}/`,{headers:this.buildHeader()})
    .pipe(
      tap(res => this.users = res)
    )
    
  }
  getFollowAndFollower():Observable<UserFollowGetResData>{
    return this.httpClient.get<UserFollowGetResData>(`${this.baseUserUrl}/followers`,{headers:this.buildHeader()})
    .pipe(
      tap(res => this.followedAndFollowers = res)
    )
  }
  onFollow(userId:number):Observable<FollowerPostResData>{
    return this.httpClient.post<FollowerPostResData>(`${this.baseTweetUrl}/follower?followedId=${userId}`,{},{headers:this.buildHeader()})
      
  }
  private buildHeader(): HttpHeaders {
    const headers = new HttpHeaders().set('apiKey', environment.apiKey).set('x-channel',environment.channel)
    .set('accessToken',localStorage.getItem('accessToken')|| '');
    return headers;
  }
 
    
    
  }