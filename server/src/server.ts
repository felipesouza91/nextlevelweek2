import express, { Request, Response, json } from 'express';

const app = express();

app.use(json());

app.get('/users', (request: Request, response: Response) => {
  response.json('Hello word');
});

app.listen(3333, () => {
  console.log('Server listen on port 3333');
});
