export interface Department {
    id: number;
    uid: string; // Guid in C# corresponds to string in TypeScript
    deptCode: string;
    deptName: string;
    isActive: boolean;
    createdBy: string; // Guid in C# corresponds to string in TypeScript
    createdAt: Date;
    updatedBy?: string | null; // Guid in C# corresponds to string in TypeScript
    updatedAt?: Date | null;
   
}
