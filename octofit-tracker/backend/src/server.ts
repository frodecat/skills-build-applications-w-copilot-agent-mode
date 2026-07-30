import express from 'express';
import './config/database.js';
import { API_PORT } from './config/apiUrl.js';
import apiRouter from './routes/api.js';

const app = express();
const PORT = API_PORT;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-${PORT}.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Octofit backend listening on port ${PORT}`);
  console.log(`Octofit API base URL: ${apiBaseUrl}`);
});
