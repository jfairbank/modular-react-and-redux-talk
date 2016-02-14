import express from 'express';
import path from 'path';

const HOST = '127.0.0.1';
const PORT = 8080;

const app = express();

const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_PATH));

app.listen(PORT, () => {
  console.log('Server listening at http://%s:%d', HOST, PORT);
});
