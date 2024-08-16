export interface HolidayList {
    id: number;
    uid: string; // GUIDs are typically represented as strings in TypeScript
    fkWeekdayUid: string; // GUIDs are typically represented as strings
    occassion: string;
    date: string; // DateOnly in C# can be represented as a string in ISO format in TypeScript
    createdBy: string; // GUIDs are typically represented as strings
    createdAt: string; // DateTime in C# can be represented as a string in ISO format
    updatedBy?: string; // Optional field for GUIDs
    updatedAt?: string; // Optional field for DateTime
    day: string;
    isActive: boolean;
  }
  