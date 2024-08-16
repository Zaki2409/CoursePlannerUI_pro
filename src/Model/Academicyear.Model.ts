
export interface AcademicYear {
    id: number;
    uid: string; // or 'Guid' if you have a custom type for GUID
    academicYear1: string;
    isActive: boolean;
    createdBy: string; // or 'Guid' if you have a custom type for GUID
    createdAt: Date;
    updatedBy?: string; // or 'Guid' if you have a custom type for GUID
    updatedAt?: Date;
    
  }