import express from 'express';

const app: express.Application = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8081, () => {
  console.log('8081');
});