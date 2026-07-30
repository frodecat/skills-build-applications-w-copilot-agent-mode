import { Router } from 'express';
import { getApiBaseUrl } from '../config/apiUrl.js';
import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models/index.js';

const apiRouter = Router();

apiRouter.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', apiBaseUrl: getApiBaseUrl() });
});

apiRouter.get('/users/', async (_req, res) => {
  const users = await UserModel.find({}, '-__v').sort({ name: 1 }).lean().exec();

  res.status(200).json({ users });
});

apiRouter.get('/teams/', async (_req, res) => {
  const teams = await TeamModel.find({}, '-__v').sort({ name: 1 }).lean().exec();

  res.status(200).json({ teams });
});

apiRouter.get('/activities/', async (_req, res) => {
  const activities = await ActivityModel.find({}, '-__v').sort({ activityDate: -1 }).lean().exec();

  res.status(200).json({ activities });
});

apiRouter.get('/leaderboard/', async (_req, res) => {
  const leaderboard = await LeaderboardModel.find({}, '-__v').sort({ rank: 1 }).lean().exec();

  res.status(200).json({ leaderboard });
});

apiRouter.get('/workouts/', async (_req, res) => {
  const workouts = await WorkoutModel.find({}, '-__v').sort({ title: 1 }).lean().exec();

  res.status(200).json({ workouts });
});

export default apiRouter;