import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/Servcie/faculty.service';
import { FacultyAdressService } from 'src/app/Servcie/FacultyAdress/faculty-adress.service';
import { Address } from 'src/Model/FacultyAdress.Model';

@Component({
  selector: 'app-faccompleteprofile',
  templateUrl: './faccompleteprofile.component.html',
  styleUrls: ['./faccompleteprofile.component.css']
})
export class FaccompleteprofileComponent implements OnInit {

  createTEMPadressfaculty : Address = {
    id: 0,
    uid: '',
    line1: '',
    line2: '',
    city: '',
    postalCode: '',
    fkStateUid: '',
    fkCountryUid: '',
    isActive: false,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined,
    facultyUid: '',
    addressType: 'T'
  }
  createPermanentadressfaculty : Address = {
    id: 0,
    uid: '',
    line1: '',
    line2: '',
    city: '',
    postalCode: '',
    fkStateUid: '',
    fkCountryUid: '',
    isActive: false,
    createdBy: '',
    createdAt: new Date(),
    updatedBy: undefined,
    updatedAt: undefined,
    facultyUid: '',
    addressType: 'P'
  }

   Tempuid = this.createTEMPadressfaculty.uid;
   Permuid = this.createPermanentadressfaculty.uid;
  stateOptions: { uid: string, name: string }[] = [
    { uid: '23D9E840-8BBA-43DC-9056-E9DE897F8ABA', name: 'Telangana' },
    // Add more state options as needed
  ];

  countryOptions: { uid: string, name: string }[] = [
    { uid: '8B0CD46D-188C-40E1-915C-263758E14C6D', name: 'India' },
    // Add more country options as needed
  ];
  constructor(private facultyaddress: FacultyAdressService ,private facultyService: FacultyService) {

  }
  ngOnInit(): void {
    const facultyUid = localStorage.getItem('userUid');
    this.createTEMPadressfaculty.facultyUid = facultyUid;
    this.createPermanentadressfaculty.facultyUid = facultyUid;
    
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
  console.log( this.createPermanentadressfaculty);
  this.facultyaddress.createAddress( this.createPermanentadressfaculty) 
  .subscribe ({
    next :(faculty) => {
      console.log(faculty);
    }
  })
}
}
