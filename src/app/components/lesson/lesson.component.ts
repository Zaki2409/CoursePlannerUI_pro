import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Servcie/Course/course.service';
import { LessonService } from 'src/app/Servcie/Lesson/lesson.service';
import { Course } from 'src/Model/Course.Model';
import { Lesson } from 'src/Model/Lesson.Model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit{

lesson :Lesson[] = [];

constructor (private lessonservice :LessonService) {}


  ngOnInit(): void {
  

    this.lessonservice.getAllLesson()
    .subscribe({
      next: (lesson) => {
         console.log(lesson);
          //to print the data from array in inspection tab 
          this.lesson = lesson;
          
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
