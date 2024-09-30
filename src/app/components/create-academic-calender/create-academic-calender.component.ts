import { Component, OnInit } from '@angular/core';
import { AcademicCalenderService } from 'src/app/Servcie/Academic_Calender/academic-calender.service';
import { AcademicyearService } from 'src/app/Servcie/AcademicYear/academicyear.service';
import { ClassService } from 'src/app/Servcie/Class/class.service';
import { SemesterService } from 'src/app/Servcie/Semester/semester.service';
import { AcademicModel } from 'src/Model/AcademicCalender.Model';
import { AcademicYear } from 'src/Model/Academicyear.Model';
import { Class } from 'src/Model/Class.Model';

import { Semester } from 'src/Model/Semester.Model';

@Component({
  selector: 'app-create-academic-calender',
  templateUrl: './create-academic-calender.component.html',
  styleUrls: ['./create-academic-calender.component.css']
})
export class CreateAcademicCalenderComponent implements OnInit {
  academicReq: AcademicModel = {
    id: 0,
    uid: '',
    description: '',
    fromDate: new Date().toISOString(),
    toDate: new Date().toISOString(),
    weeks: 0,
    days: 0,
    fkAcademicYearUid: '',
    fkSemesterUid: '',
    fkClassUid: '',
    isActive: false,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined
  };
  
  academicYears: AcademicYear[] = [];
  semesters: Semester[] = [];
  classes: Class[] = [];

  constructor (private academiccalenderervice :AcademicCalenderService ,   private academicYearService: AcademicyearService,
    private semesterService: SemesterService,
    private classService: ClassService) {
  
  }
  
  

  ngOnInit(): void {
  

    this.academicYearService.getAllaAcademicYear()
    .subscribe({
      next: (data) => {
         console.log(data);
          //to print the data from array in inspection tab 
         this.academicYears = data;
      },
      error: (response) => {
          console.log(response);
         
      }
      // error: (error) => {
      //   console.error('Error fetching employees:', error);
      // },


    });
    this.semesterService.getAllSemester()
    .subscribe({
      next: (data) => {
         console.log(data);
          //to print the data from array in inspection tab 
         this.semesters = data;
      },
      error: (response) => {
          console.log(response);
         
      }
      // error: (error) => {
      //   console.error('Error fetching employees:', error);
      // },


    });
    this.classService.getAllClass()
    .subscribe({
      next: (data) => {
         console.log(data);
          //to print the data from array in inspection tab 
         this.classes = data;
      },
      error: (response) => {
          console.log(response);
         
      }
      // error: (error) => {
      //   console.error('Error fetching employees:', error);
      // },


    })
  }


  createAcademicCalender(): void {
  
 
    this.academiccalenderervice.creategetAllacademiccalender(this.academicReq)
   
      .subscribe({
        next: (response) => {
          console.log(response);
          console.log('academic calender created successfully:', response);
          
          
        },
        error: (response) => {
          console.log('Error creating course:', response); 
        }
      });
  }
}
