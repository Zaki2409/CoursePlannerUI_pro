import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AcadmicclassService } from 'src/app/Servcie/Academicclass/acadmicclass.service';
import { AcademicyearService } from 'src/app/Servcie/AcademicYear/academicyear.service';
import { CourseService } from 'src/app/Servcie/Course/course.service';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { HolidaylistService } from 'src/app/Servcie/Holiday_List/holidaylist.service';
import { SemesterService } from 'src/app/Servcie/Semester/semester.service';
import { TimeslotService } from 'src/app/Servcie/Timesloe/timeslot.service';
import { WeekdayService } from 'src/app/Servcie/WeekDay/weekday.service';
import { WeekttService } from 'src/app/Servcie/WeekTT/weektt.service';
import { AcademicClass } from 'src/Model/AcademicClass.Model';
import { AcademicYear } from 'src/Model/Academicyear.Model';
import { Course } from 'src/Model/Course.Model';
import { Faculty } from 'src/Model/Faculty.Model';
import { HolidayList } from 'src/Model/HolidayList.Model';
import { Semester } from 'src/Model/Semester.Model';
import { TimeSlot } from 'src/Model/Timeslot.Model';
import { Weekday } from 'src/Model/Weeday.Mdel';
import { WeekTT } from 'src/Model/WeekTt.Model';

@Component({
  selector: 'app-weektt',
  templateUrl: './weektt.component.html',
  styleUrls: ['./weektt.component.css']
})
export class WeekttComponent  implements OnInit{

  weektt :WeekTT[] = [];

  weekReq: WeekTT = {
    id: 0,
    uid: '',
    fkAcademicYearUid: '',
    fkSemesterUid: '',
    fkFacultyUid: '',
    fkWeekDayUid: '',
    fkTimeslotUid: '',
    fkAccademicClassUid: '',
    fkCourseUid: '',
    isActive: false,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: '',
    updatedAt:new Date() ,
    
    
  };

  courses: Course[] = [];
  acadmicyear: AcademicYear[] = [];
  semeste: Semester[] = [];
 weeekday: Weekday[] = [];
  academicclass: AcademicClass[] = [];
  Timeslot: TimeSlot[] = [];
  facult :Faculty[] = []
  
  constructor (private weekttService :WeekttService,
    private timeslotservice :TimeslotService,
    private academicclasserivce :AcadmicclassService,
    private courseservice :CourseService,
    private academicyrservice :AcademicyearService,
    private semesterservice :SemesterService,
    private weekdaysertvice :WeekdayService,
    private  facultyservice :FacultyService,

  ) {}
  
  
    ngOnInit(): void {
    
      this.courseservice.getAllCourse().subscribe({
        next: (courses) => {
          console.log(courses);
          this.courses = courses;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
      this.weekdaysertvice.getAllweek().subscribe({
        next: (data) => {
          console.log(data);
          this.weeekday = data;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
      this.academicyrservice.getAllaAcademicYear().subscribe({
        next: (acadmicyear) => {
          console.log(acadmicyear);
          this.acadmicyear = acadmicyear;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
      this.semesterservice.getAllSemester().subscribe({
        next: (semeste) => {
          console.log(semeste);
          this.semeste = semeste;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
      this.academicclasserivce.getAllaAcademicYear().subscribe({
        next: (academicclass) => {
          console.log(academicclass);
          this.academicclass = academicclass;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
      this.timeslotservice.getAlltiomeslot().subscribe({
        next: (Timeslot) => {
          console.log(Timeslot);
          this.Timeslot = Timeslot;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
      this.facultyservice.getAllfaculty().subscribe({
        next: (facult) => {
          console.log(facult);
          this.facult = facult;
        },
        error: (response) => {
          console.log(response);
        }
      });
  
     
    }

    createWeekTT() {
      this.weekttService.createWeekTT(this.weekReq)
      .subscribe({
        next: (data) => {
           console.log(data);
            //to print the data from array in inspection tab 
            this.weektt = data;
            
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
