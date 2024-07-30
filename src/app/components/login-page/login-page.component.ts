import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { Faculty } from 'src/Model/Faculty.Model';





@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  loginName: string = '';
  loginPassword: string = '';

  constructor(private facultyService: FacultyService, private router: Router) {}


  authenticate(): void {
    this.facultyService.authenticate(this.loginName, this.loginPassword)
      .subscribe({
        next: (faculty: Faculty) => {
          if (faculty.isAdmin == true) {
            localStorage.setItem('userUid', faculty.uid);
            localStorage.setItem('useradmin' , JSON.stringify(faculty.isAdmin));
            console.log(faculty.uid);
            console.log(faculty.isAdmin);
            this.router.navigate(['/admin-dashboard']); 
          } else if (faculty.isAdmin == false){
            localStorage.setItem('userUid', faculty.uid);
            localStorage.setItem('useradmin' , JSON.stringify(faculty.isAdmin));
            console.log(faculty.uid);
             console.log(faculty.isAdmin);
            this.router.navigate(['/basic-admin-dashboard']);
          }
        },
        error: (error) => {
          console.error('Error authenticating:', error);
          // Handle authentication error (e.g., show error message)
        }
      });
  }
 
}
