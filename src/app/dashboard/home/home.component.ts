import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
 
  
  
  
  public finishedGetReport:boolean = true;
  public isFinishedGetChurch:boolean = true;
  constructor(private dashboardService:DashboardService){
   

  }
  ngOnInit(): void {
   
  }
  


  
  


  
  
}
