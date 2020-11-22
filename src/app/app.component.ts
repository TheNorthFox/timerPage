import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


const counter = timer(0, 1000);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assessment2';

  public clockCounter;
  
  ngOnInit() {
    counter.subscribe(() => {
      this.timeCounter();
    });
  }

  timeCounter() {
    let date = new Date();
    

    let second:number | string = date.getSeconds();
    let minute:number | string = date.getMinutes();
    let hour:number | string = date.getHours();
    let days:number | string = date.getDay();
    if (second < 10) {
      second = '0' + second;
    }
    if (minute < 0) {
      minute = '0' + minute
    }
    if(days < 10 ){
      days = '0' + days
    }
    this.clockCounter = days + " : " + hour + " : " + minute + " : " + second;
  }
}
