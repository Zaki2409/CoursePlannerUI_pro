import { Component, OnInit } from '@angular/core';
import { AcademicCalenderService } from 'src/app/Servcie/Academic_Calender/academic-calender.service';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';

@Component({
  selector: 'app-facacademicalender',
  templateUrl: './facacademicalender.component.html',
  styleUrls: ['./facacademicalender.component.css']
})
export class FacacademicalenderComponent implements OnInit{

  academic :AcademicModel[] = [];
  
  constructor (private academiccalenderService :AcademicCalenderService) {}
  
  
    ngOnInit(): void {
    
  
      this.academiccalenderService.getAllacademiccalender()
      .subscribe({
        next: (academica) => {
           console.log(academica);
            //to print the data from array in inspection tab 
            this.academic = academica;
            
        },
        error: (response) => {
          console.log("cech");
            console.log(response);
           
        }
        // error: (error) => {
        //   console.error('Error fetching employees:', error);
        // },
  
  
      })
    }
}
