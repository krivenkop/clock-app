import { app } from './app';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
