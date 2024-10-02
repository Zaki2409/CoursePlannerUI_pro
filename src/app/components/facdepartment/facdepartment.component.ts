import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/Servcie/Department/department.service';
import { Department } from 'src/Model/Department.Model';

@Component({
  selector: 'app-facdepartment',
  templateUrl: './facdepartment.component.html',
  styleUrls: ['./facdepartment.component.css']
})
export class FacdepartmentComponent {
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
