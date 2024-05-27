import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

 
  public profile = { label:'Mi perfil', icon: 'person',url:'/dashboard/resume' }
  public tweet = { label:'Buscar usuarios', icon: 'group',url:'/tweet/search' }
  public home = { label:'Inicio', icon: 'home',url:'/dashboard/home' }

  public userName:string = ''
  constructor(private router:Router){
    this.userName = localStorage.getItem('userName')||'tweet'
  }
  ngOnInit(): void {
  }

  toggle = []
  logout():void{
    localStorage.clear()
    this.router.navigateByUrl("/auth")
  }  
}
