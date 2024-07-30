export interface Address {
    id: number;
    uid: string;  // Guid in C# is string in TypeScript
    line1: string;
    line2?: string;  // Optional field
    city: string;
    postalCode: string;
    fkStateUid: string;  // Guid in C# is string in TypeScript
    fkCountryUid: string;  // Guid in C# is string in TypeScript
    isActive: boolean;
    createdBy: string;  // Guid in C# is string in TypeScript
    createdAt: Date;
    updatedBy?: string;  // Optional field
    updatedAt?: Date;  // Optional field
  }
  