import { Component } from '@angular/core';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { Faculty } from 'src/Model/Faculty.Model';

@Component({
  selector: 'app-register-faculty',
  templateUrl: './register-faculty.component.html',
  styleUrls: ['./register-faculty.component.css']
})
export class RegisterFacultyComponent {
  facultyReq: Faculty = {
    facultyCode: '',
    facultyName: '',
    facultyDob: new Date(),
    facultyGender: '',
    facultyEmail: '',
    facultyPhone: '',
    isAdmin: false,
    fkCollegeUid: '',
    createdBy: '',
    id: 0,
    uid: '',
    isActive: false,
    createdAt: new Date()
  };

  constructor(private facultyService: FacultyService) { }

  registerFaculty(): void {
    this.facultyService.registerFaculty(this.facultyReq)
      .subscribe({
        next: (response) => {
          console.log('Faculty registered successfully:', response);
          // Optionally, redirect or show success message
        },
        error: (error) => {
          console.error('Error registering faculty:', error);
          // Handle error, show error message
        }
      });
  }

}
