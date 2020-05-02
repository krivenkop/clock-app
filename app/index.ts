import * as express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
const {PORT} = process.env;

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello world',
  });
});

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});
