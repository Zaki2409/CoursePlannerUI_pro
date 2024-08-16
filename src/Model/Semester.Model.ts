export interface Semester {
    id: number;
    uid: string; // GUID represented as a string
    semesterCode: string;
    createdBy: string; // GUID represented as a string
    createdAt: Date;
    updatedBy?: string; // GUID represented as a string, optional
    updatedAt?: Date; // Optional
    isActive: boolean;
    
  }