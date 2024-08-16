import { Component, OnInit } from '@angular/core';
import { HolidaylistService } from 'src/app/Servcie/Holiday_List/holidaylist.service';
import { HolidayList } from 'src/Model/HolidayList.Model';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit{

  holidaylist :HolidayList[] = [];
  
  constructor (private holidaylistService :HolidaylistService) {}
  
  
    ngOnInit(): void {
    
  
      this.holidaylistService.getAllhl()
      .subscribe({
        next: (data) => {
           console.log(data);
            //to print the data from array in inspection tab 
            this.holidaylist = data;
            
        },
        error: (response) => {
            console.log(response);
           
        }
        // error: (error) => {
        //   console.error('Error fetching employees:', error);
        // },
  
  
      })
    }
  
  }
  