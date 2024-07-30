import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Servcie/Course/course.service';
import { Course } from 'src/Model/Course.Model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

course :Course[] = [];

constructor (private courservice :CourseService) {}


  ngOnInit(): void {
  

    this.courservice.getAllCourse()
    .subscribe({
      next: (course) => {
         console.log(course);
          //to print the data from array in inspection tab 
          this.course = course;
          
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
