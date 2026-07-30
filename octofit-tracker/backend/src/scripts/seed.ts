import mongoose from 'mongoose';
import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      TeamModel.deleteMany({}),
      UserModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    await TeamModel.insertMany([
      { name: 'OctoForce', mascot: 'Dumbbell', city: 'Seattle', memberCount: 3 },
      { name: 'Flex Appeal', mascot: 'Kettlebell', city: 'Austin', memberCount: 2 },
      { name: 'Cardio Collective', mascot: 'Lightning Bolt', city: 'Denver', memberCount: 2 },
    ]);

    await UserModel.insertMany([
      { name: 'Mona Rivera', email: 'mona.rivera@example.com', age: 32, role: 'runner', teamName: 'OctoForce' },
      { name: 'Dev Patel', email: 'dev.patel@example.com', age: 28, role: 'cyclist', teamName: 'Flex Appeal' },
      { name: 'Iris Chen', email: 'iris.chen@example.com', age: 35, role: 'coach', teamName: 'OctoForce' },
      { name: 'Noah Brooks', email: 'noah.brooks@example.com', age: 41, role: 'rower', teamName: 'Cardio Collective' },
      { name: 'Ava Thompson', email: 'ava.thompson@example.com', age: 24, role: 'strength athlete', teamName: 'Flex Appeal' },
    ]);

    await ActivityModel.insertMany([
      { userEmail: 'mona.rivera@example.com', type: 'Trail Run', durationMinutes: 52, caloriesBurned: 480, activityDate: new Date('2026-07-27T13:30:00Z') },
      { userEmail: 'dev.patel@example.com', type: 'Road Cycling', durationMinutes: 75, caloriesBurned: 710, activityDate: new Date('2026-07-28T12:00:00Z') },
      { userEmail: 'iris.chen@example.com', type: 'Strength Training', durationMinutes: 45, caloriesBurned: 360, activityDate: new Date('2026-07-28T18:15:00Z') },
      { userEmail: 'noah.brooks@example.com', type: 'Indoor Rowing', durationMinutes: 38, caloriesBurned: 430, activityDate: new Date('2026-07-29T11:45:00Z') },
      { userEmail: 'ava.thompson@example.com', type: 'HIIT Circuit', durationMinutes: 32, caloriesBurned: 390, activityDate: new Date('2026-07-29T20:00:00Z') },
    ]);

    await LeaderboardModel.insertMany([
      { userEmail: 'dev.patel@example.com', rank: 1, points: 1840, weeklyMinutes: 315 },
      { userEmail: 'mona.rivera@example.com', rank: 2, points: 1715, weeklyMinutes: 286 },
      { userEmail: 'noah.brooks@example.com', rank: 3, points: 1490, weeklyMinutes: 244 },
      { userEmail: 'iris.chen@example.com', rank: 4, points: 1325, weeklyMinutes: 220 },
      { userEmail: 'ava.thompson@example.com', rank: 5, points: 1280, weeklyMinutes: 205 },
    ]);

    await WorkoutModel.insertMany([
      { title: 'Morning Mobility Reset', focus: 'mobility', difficulty: 'beginner', durationMinutes: 20, exercises: ['Cat-cow flow', 'World greatest stretch', 'Hip airplanes', 'Thoracic rotations'] },
      { title: 'Power Runner Intervals', focus: 'running', difficulty: 'intermediate', durationMinutes: 42, exercises: ['Warm-up jog', 'Six 400m repeats', 'Recovery walk', 'Cooldown jog'] },
      { title: 'Full Body Strength Builder', focus: 'strength', difficulty: 'intermediate', durationMinutes: 50, exercises: ['Goblet squats', 'Push-ups', 'Romanian deadlifts', 'Renegade rows'] },
      { title: 'Row and Core Finisher', focus: 'conditioning', difficulty: 'advanced', durationMinutes: 35, exercises: ['Rowing sprints', 'Plank reaches', 'Russian twists', 'Hollow holds'] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
