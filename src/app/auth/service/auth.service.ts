import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import { AuthPostReqData } from '../interfaces/auth-post-req-data.interface';
import { AuthPostResData } from '../interfaces/auth-post-res-data.interface';
import { UserPostReqData, UserPostResData } from '../interfaces/user-get-res.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.authBaseUrl;
  private readonly userbaseUrl: string = environment.userBaseUrl;
  private http = inject(HttpClient);

  onLogin(authPostReqData: AuthPostReqData): Observable<boolean> {
    const url = `${this.baseUrl}/login`;
    const body = authPostReqData;

    return this.http.post<AuthPostResData>(url, body,{headers:this.buildHeader()})
      .pipe(
        tap( res => console.log(res)),
        map(res => this.buildUserFromJWT(res.data.accessToken)),
        catchError(err => throwError(() =>err.error))
      )
  }
  addUser(userPostReqData:UserPostReqData): Observable<UserPostResData> {
    const url = `${this.userbaseUrl}/`;
    const body = userPostReqData;

    return this.http.post<UserPostResData>(url, body,{headers:this.buildHeader()})
      .pipe(
        catchError(err => throwError(() =>err.error))
      )
  }

 
  private buildUserFromJWT(jwt: string): boolean {
    localStorage.setItem('accessToken', jwt)
    const decodedToken: any = jwtDecode(jwt);
    localStorage.setItem('accessTokenExpires',decodedToken.exp)
    localStorage.setItem('user',JSON.stringify(decodedToken.tweetUser))
    return true;
  }
  private buildHeader(): HttpHeaders {
    const headers = new HttpHeaders().set('apiKey', environment.apiKey).set('x-channel',environment.channel);
    return headers;
  }
}
