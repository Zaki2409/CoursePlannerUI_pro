import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HolidaylistService } from 'src/app/Servcie/Holiday_List/holidaylist.service';
import { WeekdayService } from 'src/app/Servcie/WeekDay/weekday.service';
import { HolidayList } from 'src/Model/HolidayList.Model';
import { Weekday } from 'src/Model/Weeday.Mdel';

@Component({
  selector: 'app-create-holiday-list',
  templateUrl: './create-holiday-list.component.html',
  styleUrls: ['./create-holiday-list.component.css']
})
export class CreateHolidayListComponent implements OnInit {
  courseReq: HolidayList = {
    id: 0,
    uid: '',
    fkWeekdayUid: '',
    occassion: '',
    date: new Date().toISOString(), // Use current date or initialize as needed
    createdBy: '',
    createdAt: new Date().toISOString(),
    updatedBy: undefined,
    updatedAt: undefined,
    day: '',
    isActive: false
  };
  
  weekda : Weekday[] = [];
  
  constructor (private holidaylistservice :HolidaylistService ,   private weekdayservice: WeekdayService) {

      
  }
  ngOnInit(): void {
    this.weekdayservice.getAllweek()
    .subscribe({
      next: (data) => {
         console.log(data);
          //to print the data from array in inspection tab 
         this.weekda = data;
      },
      error: (response) => {
          console.log(response);
         
      }
      // error: (error) => {
      //   console.error('Error fetching employees:', error);
      // },


    });
  }

  createHL(): void {
  
 
    this.holidaylistservice.createhl(this.courseReq)
   
      .subscribe({
        next: (response) => {
          console.log(response);
          console.log('HOLDAIY created successfully:', response);
          
          
        },
        error: (response) => {
          console.log('Error creating course:', response);
        }
      });
  }
}