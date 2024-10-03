import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms'; 
//nebular and ng-zorro modules
import { NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule, NbCardModule,NbActionsModule ,NbIconModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BasicDashboardComponent } from './components/basic-dashboard/basic-dashboard.component';
import { RegisterFacultyComponent } from './components/register-faculty/register-faculty.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AcademicCalendarComponent } from './components/academic-calendar/academic-calendar.component';
import { CourseComponent } from './components/course/course.component';

import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { ProfileComponent } from './components/profile/profile.component';

import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { FacultydashbaordComponent } from './components/facultydashbaord/facultydashbaord.component';
import { FSidebarComponent } from './components/f-sidebar/f-sidebar.component';
import { CreatecourseComponent } from './components/createcourse/createcourse.component';
import { DepartmentComponent } from './components/department/department.component';
import { CreatedepartmentComponent } from './components/createdepartment/createdepartment.component';
import { CreatelessonComponent } from './components/createlesson/createlesson.component';

import { CreateAcademicCalenderComponent } from './components/create-academic-calender/create-academic-calender.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CreateHolidayListComponent } from './components/create-holiday-list/create-holiday-list.component';
import { WeekttComponent } from './components/weektt/weektt.component';
import { FaclessonComponent } from './components/faclesson/faclesson.component';
import { FaccourseComponent } from './components/faccourse/faccourse.component';
import { FacacademicalenderComponent } from './components/facacademicalender/facacademicalender.component';
import { FacholidaylistComponent } from './components/facholidaylist/facholidaylist.component';
import { FacdepartmentComponent } from './components/facdepartment/facdepartment.component';

import { FaccompleteprofileComponent } from './components/faccompleteprofile/faccompleteprofile.component';
import { FacprofileComponent } from './components/facprofile/facprofile.component';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    BasicDashboardComponent,
    RegisterFacultyComponent,
    LessonComponent,
    AcademicCalendarComponent,
    CourseComponent,
    SidebarComponentComponent,
    ProfileComponent,
    CompleteProfileComponent,
    FacultydashbaordComponent,
    FSidebarComponent,
    CreatecourseComponent,
    DepartmentComponent,
    CreatedepartmentComponent,
    CreatelessonComponent,
    CreateAcademicCalenderComponent,
    HolidayListComponent,
    CreateHolidayListComponent,
    WeekttComponent,
    FaclessonComponent,
    FaccourseComponent,
    FacacademicalenderComponent,
    FacholidaylistComponent,
    FacdepartmentComponent,
    FaccompleteprofileComponent,
    FacprofileComponent,                                                        
                         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NbCardModule,
    NbInputModule,
    NbEvaIconsModule,
    NbActionsModule ,
    NbIconModule ,
    MatSlideToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
   
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
