import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/Servcie/Department/department.service';
import { Department } from 'src/Model/Department.Model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  department :Department[] = [];

  constructor (private deptservice :DepartmentService) {}
  
  
    ngOnInit(): void {
    
  
      this.deptservice.getAllCourse()
      .subscribe({
        next: (department) => {
           console.log(department);
            //to print the data from array in inspection tab 
            this.department = department;
            
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
