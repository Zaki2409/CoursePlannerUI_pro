
export interface AcademicModel {
    id: number;
    uid: string;
    description: string;
    fromDate: string; // Use string to represent DateOnly
    toDate: string; // Use string to represent DateOnly
    weeks: number;
    days: number;
    fkAcademicYearUid: string;
    fkSemesterUid: string;
    fkClassUid: string;
    isActive: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
  }
  