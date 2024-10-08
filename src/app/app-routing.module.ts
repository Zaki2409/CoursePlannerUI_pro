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
import { WeekttComponent } from './components/weektt/weektt.component';
import { FacacademicalenderComponent } from './components/facacademicalender/facacademicalender.component';
import { FaccompleteprofileComponent } from './components/faccompleteprofile/faccompleteprofile.component';
import { FaccourseComponent } from './components/faccourse/faccourse.component';
import { FacdepartmentComponent } from './components/facdepartment/facdepartment.component';
import { FacholidaylistComponent } from './components/facholidaylist/facholidaylist.component';
import { FaclessonComponent } from './components/faclesson/faclesson.component';
import { FacprofileComponent } from './components/facprofile/facprofile.component';
import { authGuard } from './Servcie/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin-dashboard', component: BasicDashboardComponent, canActivate: [authGuard] },
  { path: 'register-faculty', component: RegisterFacultyComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'academic-calendar', component: AcademicCalendarComponent },
  { path: 'course', component: CourseComponent },
  { path: 'basic-admin-dashboard', component: FacultydashbaordComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'facultylesson', component: LessonComponent },
  { path: 'facultyacademic-calendar', component: AcademicCalendarComponent },
  { path: 'facultycourse', component: CourseComponent },
  { path: 'facultyprofile', component: ProfileComponent },
  { path: 'Complete-faculty', component: CompleteProfileComponent },
  { path: 'createcourse', component: CreatecourseComponent },
  { path: 'Department', component: DepartmentComponent },
  { path: 'createdepartment', component: CreatedepartmentComponent },
  { path: 'createlesson', component: CreatelessonComponent },
  { path: 'academic', component: AcademicCalendarComponent },
  { path: 'createacademic', component: CreateAcademicCalenderComponent },
  { path: 'Holiday', component: HolidayListComponent },
  { path: 'createHoliday', component: CreateHolidayListComponent },
  { path: 'weekday', component: WeekttComponent },

  // Faculty routing
  { path: 'faclesson', component: FaclessonComponent },
  { path: 'facacademic-calendar', component: FacacademicalenderComponent },
  { path: 'faccourse', component: FaccourseComponent },
  { path: 'facprofile', component: FacprofileComponent },
  { path: 'facdept', component: FacdepartmentComponent },
  { path: 'facHolidaylist', component: FacholidaylistComponent },
  { path: 'Complete-ffaculty', component: FaccompleteprofileComponent },

  // Default route
  { path: '**', redirectTo: '/admin-dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
