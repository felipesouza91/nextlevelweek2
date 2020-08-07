import express, { Request, Response, json } from 'express';
import router from './routes';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(3333, () => {
  console.log('Server listen on port 3333');
});
