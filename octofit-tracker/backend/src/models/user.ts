import { Schema, model } from 'mongoose';

export interface User {
  name: string;
  email: string;
  age: number;
  role: string;
  teamName: string;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    role: { type: String, required: true },
    teamName: { type: String, required: true },
  },
  { collection: 'users', timestamps: true },
);

export const UserModel = model<User>('User', userSchema);