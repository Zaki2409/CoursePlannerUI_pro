export interface Faculty {
    id: number;
    uid: string;
    facultyCode: string;
    facultyName: string;
    facultyDob: Date;
    facultyGender: string;
    facultyEmail: string;
    facultyPhone: string;
    loginName?: string;
    loginPassword?: string;
    isAdmin: boolean;
    fkCurrentAddressUid?: string;
    fkPermanentAddressUid?: string;
    fkCollegeUid: string;
    isActive: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
    token?: string; // this line to include token property
  }
  