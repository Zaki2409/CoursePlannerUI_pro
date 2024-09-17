export interface AcademicClass {
    id: number;
    uid: string;
    classCode: string;
    fkDeptUid: string;
    fkSectionUid: string;
    fkClassUid: string;
    isActive: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string; // optional
    updatedAt?: Date; // optional
  }
  