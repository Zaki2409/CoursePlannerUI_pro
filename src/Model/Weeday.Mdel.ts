export interface Weekday {
    id: number;
    uid: string; // GUID represented as a string
    dayName: string;
    createdBy: string; // GUID represented as a string
    createdAt: Date;
    updatedBy?: string; // Optional field for GUID
    updatedAt?: Date; // Optional field
    isActive: boolean;
  }
  