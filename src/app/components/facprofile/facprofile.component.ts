import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { Faculty } from 'src/Model/Faculty.Model';

@Component({
  selector: 'app-facprofile',
  templateUrl: './facprofile.component.html',
  styleUrls: ['./facprofile.component.css']
})
export class FacprofileComponent implements OnInit {
  faculty :Faculty |null = null;
  dashboardLink: string;
  isadmin: string  | null = null;
  
  
  constructor(private facultyservice :FacultyService) {
    const isadmin = localStorage.getItem('useradmin');
    this.isadmin = isadmin;
    this.dashboardLink = this.isadmin === 'true' ? '/admin-dashboard' :'/basic-admin-dashboard'; // Adjust this condition as needed
    
  }
    ngOnInit(): void {
      const uid = localStorage.getItem('userUid'); 
    
      console.log(uid);
      if(uid) {
        this.facultyservice.getEmployeeByUid(uid)
    
        .subscribe({
          next : (faculty)=> {
              console.log(faculty);
              this.faculty=faculty;
          },
          error :(err)=> {
              console.log(err);
          },
        });
      }
      else {
        console.error('User UID not found in localStorage');
      }
     
  }
  
  
  }
  