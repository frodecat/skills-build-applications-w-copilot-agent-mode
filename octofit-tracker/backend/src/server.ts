import express from 'express';
import './config/database.js';
import apiRouter from './routes/api.js';

const app = express();
const PORT = 8000;
const $CODESPACE_NAME = process.env.CODESPACE_NAME;
const apiBaseUrl = $CODESPACE_NAME
  ? `https://${$CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

//const codespaceName = 'glorious-xylophone-6wrwpvqwxxg2wv5';
//const apiBaseUrl = codespaceName
//  ? `https://${codespaceName}-8000.app.github.dev`
//  : `http://localhost:${PORT}`;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Octofit backend listening on port ${PORT}`);
  console.log(`Octofit API base URL: ${apiBaseUrl}`);
});
