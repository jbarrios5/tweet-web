import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  public sidebarItems = [
    { label:'Listar ', icon: 'list',url:'/transaction/list' }
  
  ]

  public sidebarItemsReport = [
    { label:'Resumen', icon:'monitoring',url:'/dashboard/resume' }
  ]
  public home = { label:'Inicio', icon: 'home',url:'/dashboard/home' }
  
  constructor(private router:Router){}
  ngOnInit(): void {
  }

  toggle = []
  logout():void{
    localStorage.clear()
    this.router.navigateByUrl("/auth")
  }  
}
