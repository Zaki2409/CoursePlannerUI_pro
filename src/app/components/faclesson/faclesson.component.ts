import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/Servcie/Lesson/lesson.service';
import { Lesson } from 'src/Model/Lesson.Model';

@Component({
  selector: 'app-faclesson',
  templateUrl: './faclesson.component.html',
  styleUrls: ['./faclesson.component.css']
})
export class FaclessonComponent implements OnInit{

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
  