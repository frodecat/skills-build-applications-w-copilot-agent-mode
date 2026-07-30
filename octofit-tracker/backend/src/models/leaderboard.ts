import { Schema, model } from 'mongoose';

export interface LeaderboardEntry {
  userEmail: string;
  rank: number;
  points: number;
  weeklyMinutes: number;
}

const leaderboardSchema = new Schema<LeaderboardEntry>(
  {
    userEmail: { type: String, required: true, unique: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    weeklyMinutes: { type: Number, required: true },
  },
  { collection: 'leaderboard', timestamps: true },
);

export const LeaderboardModel = model<LeaderboardEntry>('LeaderboardEntry', leaderboardSchema);