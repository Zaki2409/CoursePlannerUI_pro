import { Component, OnInit } from '@angular/core';
import { AcadmicclassService } from 'src/app/Servcie/Academicclass/acadmicclass.service';
import { AcademicyearService } from 'src/app/Servcie/AcademicYear/academicyear.service';
import { CourseService } from 'src/app/Servcie/Course/course.service';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { SemesterService } from 'src/app/Servcie/Semester/semester.service';
import { TimeslotService } from 'src/app/Servcie/Timesloe/timeslot.service';
import { WeekdayService } from 'src/app/Servcie/WeekDay/weekday.service';
import { WeekttService } from 'src/app/Servcie/WeekTT/weektt.service';
import { AcademicClass } from 'src/Model/AcademicClass.Model';
import { AcademicYear } from 'src/Model/Academicyear.Model';
import { Course } from 'src/Model/Course.Model';
import { Faculty } from 'src/Model/Faculty.Model';
import { WeekTTable } from 'src/Model/FacultyWeekTimeTable.Model';
import { LINQacademicclass } from 'src/Model/LinqAcademicClass.Model';
import { Semester } from 'src/Model/Semester.Model';
import { TimeSlot } from 'src/Model/Timeslot.Model';
import { Weekday } from 'src/Model/Weeday.Mdel';
import { WeekTT } from 'src/Model/WeekTt.Model';

@Component({
  selector: 'app-facultydashbaord',
  templateUrl: './facultydashbaord.component.html',
  styleUrls: ['./facultydashbaord.component.css']
})
export class FacultydashbaordComponent implements OnInit{
  userUid: string | null = '';
  weektt :WeekTT[] = [];
  Weektt1 :WeekTTable [ ] = [];
  academiclass : LINQacademicclass [] = [];

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

  weekReqtimetable: WeekTTable = {
    classCode: '',
    timeSlotCode: '',
    academicYear: '',
    facultyName: '',
    dayName: '',
    courseName: '',
    semesterCode: ''
};

linwqacademicaclass: LINQacademicclass = {
  classCode: '',
  deptName: '',
  classYear: '',
  sectionCode: ''
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
    private  weektimetableserivce :WeekttService,

  ) {}


  ngOnInit(): void {
    // Step 1: Get the stored user UID
    this.userUid = localStorage.getItem('userUid');
    console.log(this.userUid);

    if (this.userUid) {
      this.weektimetableserivce.getAllweektimetable(this.userUid).subscribe({
        next: (data) => {
          console.log(data);
          this.Weektt1 = data;
        },
        error: (error) => {
          console.error('Error fetching timetable data', error);
        }
      });
    } else {
      console.error('userUid is null or undefined.');
    } ;

    if (this.userUid) {
      this.academicclasserivce.getacademicclasslinq(this.userUid).subscribe({
        next: (data) => {
          console.log(data);
          this.academiclass = data;
        },
        error: (error) => {
          console.error('Error fetching timetable data', error);
        }
      });
    } else {
      console.error('userUid is null or undefined.');
    }
  }



  


  
}
