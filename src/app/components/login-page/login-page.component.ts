import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { Faculty } from 'src/Model/Faculty.Model';


import { AuthService } from 'src/app/Servcie/auth.service';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  loginName: string = '';
  loginPassword: string = '';

  constructor(private facultyService: FacultyService, private router: Router , private authService: AuthService  ) {} // Inject AuthService

    // Updated the authenticate method to save the token from the backend response
  authenticate(): void {
    this.facultyService.authenticate(this.loginName, this.loginPassword)
      .subscribe({
        next: (faculty: Faculty) => {
          this.authService.setToken(faculty.token!); // Assuming the token is included in the response .... ! operator This tells TypeScript that you are confident the value will not be undefined
          localStorage.setItem('userUid', faculty.uid);
          localStorage.setItem('useradmin', JSON.stringify(faculty.isAdmin));
          if (faculty.isAdmin) {
            this.router.navigate(['/admin-dashboard']); 
          } else {
            this.router.navigate(['/basic-admin-dashboard']);
          }
        },
        error: (error: any) => {
          console.error('Error authenticating:', error);
          // Handle authentication error (e.g., show error message)
        }
      });
  }

  logout() {
    this.authService.logout(); // Call the logout method
    this.router.navigate(['/login']); // Redirect to login page
  }
 
}
