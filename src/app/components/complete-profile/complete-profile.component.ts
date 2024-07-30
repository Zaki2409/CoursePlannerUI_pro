import { Component, OnInit } from '@angular/core';
import { FacultyAdressService } from 'src/app/Servcie/FacultyAdress/faculty-adress.service';
import { Address } from 'src/Model/FacultyAdress.Model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {

  createTEMPadressfaculty : Address = {
    id: 0,
    uid: '',
    line1: '',
    city: '',
    postalCode: '',
    fkStateUid: '',
    fkCountryUid: '',
    isActive: true,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined
  }
  createPermanentadressfaculty : Address = {
    id: 0,
    uid: '',
    line1: '',
    city: '',
    postalCode: '',
    fkStateUid: '',
    fkCountryUid: '',
    isActive: true,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined
  }

  stateOptions: { uid: string, name: string }[] = [
    { uid: '23D9E840-8BBA-43DC-9056-E9DE897F8ABA', name: 'Telangana' },
    // Add more state options as needed
  ];

  countryOptions: { uid: string, name: string }[] = [
    { uid: '8B0CD46D-188C-40E1-915C-263758E14C6D', name: 'India' },
    // Add more country options as needed
  ];
  constructor(private facultyaddress: FacultyAdressService) {

  }
  ngOnInit(): void {
  
    
  }


addtempfacultyadd() {
  this.facultyaddress.createAddress( this.createTEMPadressfaculty) 
  .subscribe ({
    next :(faculty) => {
      console.log(faculty);
    }
  })
}
addpermanetnfacultyadd( ) {
  this.facultyaddress.createAddress( this.createPermanentadressfaculty) 
  .subscribe ({
    next :(faculty) => {
      console.log(faculty);
    }
  })
}
}
