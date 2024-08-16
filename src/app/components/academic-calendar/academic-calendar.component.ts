import { Component, OnInit } from '@angular/core';
import { AcademicCalenderService } from 'src/app/Servcie/Academic_Calender/academic-calender.service';
import { LessonService } from 'src/app/Servcie/Lesson/lesson.service';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';
import { Lesson } from 'src/Model/Lesson.Model';

@Component({
  selector: 'app-academic-calendar',
  templateUrl: './academic-calendar.component.html',
  styleUrls: ['./academic-calendar.component.css']
})
export class AcademicCalendarComponent implements OnInit{

  academic :AcademicModel[] = [];
  
  constructor (private academiccalenderService :AcademicCalenderService) {}
  
  
    ngOnInit(): void {
    
  
      this.academiccalenderService.getAllacademiccalender()
      .subscribe({
        next: (academic) => {
           console.log(academic);
            //to print the data from array in inspection tab 
            this.academic = academic;
            
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
   {

}
