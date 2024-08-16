import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BasicDashboardComponent } from './components/basic-dashboard/basic-dashboard.component';
import { RegisterFacultyComponent } from './components/register-faculty/register-faculty.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AcademicCalendarComponent } from './components/academic-calendar/academic-calendar.component';
import { CourseComponent } from './components/course/course.component';
import { ProfileComponent } from './components/profile/profile.component';

import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { FacultydashbaordComponent } from './components/facultydashbaord/facultydashbaord.component';
import { CreatecourseComponent } from './components/createcourse/createcourse.component';
import { DepartmentComponent } from './components/department/department.component';
import { CreatedepartmentComponent } from './components/createdepartment/createdepartment.component';
import { CreatelessonComponent } from './components/createlesson/createlesson.component';
import { CreateAcademicCalenderComponent } from './components/create-academic-calender/create-academic-calender.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CreateHolidayListComponent } from './components/create-holiday-list/create-holiday-list.component';



const routes: Routes = [
 { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin-dashboard', component: BasicDashboardComponent },
  { path: 'register-faculty', component: RegisterFacultyComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'academic-calendar', component: AcademicCalendarComponent },
  { path: 'course', component: CourseComponent },
  { path: 'basic-admin-dashboard', component: FacultydashbaordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'facultylesson', component: LessonComponent },
  { path: 'facultyacademic-calendar', component: AcademicCalendarComponent },
  { path: 'facultycourse', component: CourseComponent },
  { path: 'facultyprofile', component: ProfileComponent },
  { path: 'Complete-faculty', component: CompleteProfileComponent },
  { path: 'createcourse', component: CreatecourseComponent },
  { path: 'Department', component: DepartmentComponent },
  { path: 'createdepartment', component: CreatedepartmentComponent },
  { path: 'createdepartment', component: CreatedepartmentComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'createlesson', component: CreatelessonComponent },
  { path: 'academic', component: AcademicCalendarComponent },
  { path: 'createacademic', component: CreateAcademicCalenderComponent },
  { path: 'Holiday', component: HolidayListComponent },
  { path: 'createHoliday', component: CreateHolidayListComponent },
  
  


  // { path: '', redirectTo: '/admin-dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/admin-dashboard' }, // Redirect any other route to def // cahnge to dahsbaod

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
