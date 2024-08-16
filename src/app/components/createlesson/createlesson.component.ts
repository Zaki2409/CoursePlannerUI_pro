import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Servcie/Course/course.service';
import { LessonService } from 'src/app/Servcie/Lesson/lesson.service';
import { Course } from 'src/Model/Course.Model';
import { Lesson } from 'src/Model/Lesson.Model';

@Component({
  selector: 'app-createlesson',
  templateUrl: './createlesson.component.html',
  styleUrls: ['./createlesson.component.css']
})
export class CreatelessonComponent implements OnInit {
  courses: Course[] = [];
  lessonReq: Lesson = {
    id: 0,
    uid: '',
    lessonName: '',
    lessonTopic: '',
    fkCourseUid: '',
    isActive: false,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined,
  };
  constructor (private lessonservice :LessonService , private courseService: CourseService) {
  
  }
  
  ngOnInit(): void {
    // Fetch the courses
    this.courseService.getAllCourse()
      .subscribe({
        next: (courses) => {
          console.log(courses);
          this.courses = courses;
        },
        error: (response) => {
          console.log(response);
        }
      });

    // Fetch lessons (if you have this logic already)
    // this.fetchLessons();
  }

  createLesson(): void {
  
 
    this.lessonservice.createLesson(this.lessonReq)
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
