/* eslint no-console:0 */

import express from 'express';
import path from 'path';

const HOST = '127.0.0.1';
const PORT = 8080;

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server listening at http://%s:%d', HOST, PORT);
});
