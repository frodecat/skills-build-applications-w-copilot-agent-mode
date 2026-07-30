import express from 'express';
import './config/database.js';

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Octofit backend listening on port ${PORT}`);
});
