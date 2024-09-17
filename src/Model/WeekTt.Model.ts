export interface WeekTT {
    id: number;
    uid: string; // TypeScript uses `string` for GUIDs
    fkAcademicYearUid: string; // TypeScript uses `string` for GUIDs
    fkSemesterUid: string;
    fkFacultyUid: string;
    fkWeekDayUid: string;
    fkTimeslotUid: string;
    fkAccademicClassUid: string;
    fkCourseUid: string;
    isActive: boolean;
    createdBy: string; // TypeScript uses `string` for GUIDs
    createdAt: Date;
    updatedBy?: string; // Use `string` for optional GUIDs
    updatedAt?: Date;   // Make it optional to match `DateTime?` in C#
  
   
  }
  