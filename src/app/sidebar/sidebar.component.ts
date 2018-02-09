import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarOculta = true;
  
  constructor() { }

  ngOnInit() {
  }

  alternarSidebar(){
    // if(this.sidebarOculta){
    //   this.sidebarOculta = false;
    // }else{
    //   this.sidebarOculta = true;
    // }
    this.sidebarOculta = !this.sidebarOculta;
    
  }

}
