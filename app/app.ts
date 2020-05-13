import * as express from 'express';
import * as dotenv from 'dotenv';
import { attachControllers } from '@decorators/express';
import { HomeController } from './src/controller/HomeController';

import 'reflect-metadata';

dotenv.config();

export const app: express.Application = express();

app.use(express.json());

attachControllers(app, [HomeController]);
