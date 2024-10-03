import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {NativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-basic-dashboard',
  templateUrl: './basic-dashboard.component.html',
  styleUrls: ['./basic-dashboard.component.css'],

})
export class BasicDashboardComponent implements OnInit {
  selected: Date | null = null;  // Property for selected date

  ngOnInit(): void {
    this.selected = new Date();  // Set selected date to today's date
  }
}
