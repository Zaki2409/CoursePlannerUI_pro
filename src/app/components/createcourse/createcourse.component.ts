import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/Servcie/Course/course.service';
import { Course } from 'src/Model/Course.Model';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent {

  courseReq: Course = {
    id: 0,
    uid: '',
    courseCode: '',
    courseName: '',
    weeklyLectures: 0,
    weeklyTheory: 0,
    weeklyPracticals: 0,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined,
    isActive: false
  };


  


  constructor (private courservice :CourseService) {
  
  }
  
  

  createCourse(): void {
  
 
    this.courservice.createcourse(this.courseReq)
      .subscribe({
        next: (response) => {
          console.log('Course created successfully:', response);
          
          
        },
        error: (response) => {
          console.log('Error creating course:', response);
        }
      });
  }
}
