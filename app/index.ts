import * as express from 'express';
import * as dotenv from 'dotenv';
import { Connection } from '../lib/connection';

import { Request, Response } from 'express';
import {QueryResult} from "pg";

dotenv.config();

const app: express.Application = express();
const {PORT} = process.env;

app.get('/', async (req: Request, res: Response) => {
  const dbRes: QueryResult = await (new Connection).fetchDatabases();
  console.log(dbRes.rows);
  res.json(dbRes);
});

app.listen(PORT, () => {
  console.log('server started at http://localhost:'+PORT);
});
