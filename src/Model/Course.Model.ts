export interface Course {
    id: number;
    uid: string; // Using string to represent Guid in TypeScript
    courseCode: string;
    courseName: string;
    weeklyLectures: number;
    weeklyTheory: number;
    weeklyPracticals: number;
    createdBy: string; // Using string to represent Guid in TypeScript
    createdAt: Date;
    updatedBy?: string; // Using string to represent Guid in TypeScript and making it optional
    updatedAt?: Date;
    isActive: boolean;
  }
  