import express from 'express';
import { calculator } from './calculator'
const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});