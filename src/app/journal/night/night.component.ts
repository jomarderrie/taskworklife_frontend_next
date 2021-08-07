import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.css']
})
export class NightComponent implements OnInit {
  currentDate:string = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });

  doneToday: string = " - eating";
  coreGoals: string = " gym ";
  distractions: string = "code - 12:00 math - 6:00";
  habitsImprovement: string = "fpapping";
  toAvoid: string = "eating gomad";
  planTomorrow : string = "asd";

  constructor() {
    interval(1000).pipe().subscribe((x) =>{
      this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    });
  }

  ngOnInit(): void {
  }

  onSubmitNight(e:any){
    console.log(e.value)
  }
}
