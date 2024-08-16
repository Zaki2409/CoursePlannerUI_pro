export interface Lesson {
    id: number;
    uid: string;
    lessonName: string;
    lessonTopic: string;
    fkCourseUid: string;
    isActive: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
  }
  