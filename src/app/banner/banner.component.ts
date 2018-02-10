import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  indice = 0;

  constructor() {
    setInterval(() => {
      this.indice++;

      if(this.indice == 3){
        this.indice = 0;
      } 
    }, 3000);
  }

  ngOnInit() {
  }

}
