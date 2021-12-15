import { Component } from '@angular/core';
import timetable from './timetable.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  d: Date;
  todaydate = "";
  todaySchedule = "";

  constructor() {
    this.d = new Date();
    this.todaydate = this.d.toISOString();
    this.todaySchedule = timetable[this.d.getUTCDay()];
    console.log(timetable, this.d.getUTCDate());
  }
}
