export interface TimeSlot {
    id: number;
    uid: string;
    timeSlotCode: string;
    description: string;
    isTeachingSlot: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string; // optional
    updatedAt?: Date; // optional
    isActive: boolean;
  }
  