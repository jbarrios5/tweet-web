import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TweetGetResData, TweetPostReqData, TweetPostResData } from '../interface/tweet.interface';




@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private readonly baseTweetUrl: string = environment.tweetBaseUrl;
  constructor(private httpClient:HttpClient) { }

  getTwees(userName:string):Observable<TweetGetResData>{
    return this.httpClient.get<TweetGetResData>(`${this.baseTweetUrl}/?userName=${userName}`,{headers:this.buildHeader()})
  } 
  addTweet(req:TweetPostReqData):Observable<TweetPostResData>{
    return this.httpClient.post<TweetPostResData>(`${this.baseTweetUrl}/`,req,{headers:this.buildHeader()})
  } 

  private buildHeader(): HttpHeaders {
    const headers = new HttpHeaders().set('apiKey', environment.apiKey).set('x-channel',environment.channel)
    .set('accessToken',localStorage.getItem('accessToken')|| '');
    return headers;
  }
}
    
    