import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/Servcie/Department/department.service';
import { Department } from 'src/Model/Department.Model';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent {
  deptReq: Department = {
    id: 0,
    uid: '',
    deptCode: '',
    deptName: '',
    isActive: false,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: null,
    updatedAt: null,
    
  };


  


  constructor (private deptservice :DepartmentService) {
  
  }
  
  

  createDepartment(): void {
  
 
    this.deptservice.createcourse(this.deptReq)
      .subscribe({
        next: (response) => {
          console.log('Course created successfully:', response);
          
          
        },
        error: (response) => {
          console.log('Error creating course:', response);
        }
      });
  }
}
