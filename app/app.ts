import * as express from 'express';
import * as dotenv from 'dotenv';
import { Connection } from '@lib/connection';

import { Request, Response } from 'express';
import {QueryResult} from "pg";

dotenv.config();

export const app: express.Application = express();

app.get('/', async (req: Request, res: Response) => {
    const dbRes: QueryResult = await (new Connection).fetchDatabases();
    res.json(dbRes);
});
