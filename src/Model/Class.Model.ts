export interface Class {
  id: number;
  uid: string;
  classYear: string;
  createdBy: string;
  createdAt: string; // or Date if you prefer using Date objects
  updatedBy?: string; // optional field
  updatedAt?: string; // or Date if you prefer using Date objects
  isActive?: boolean; // optional field
}
