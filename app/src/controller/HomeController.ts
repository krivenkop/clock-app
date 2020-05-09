import { OK } from 'http-status-codes';
import { Controller, Get } from '@decorators/express';
import { Inject, Injectable } from '@decorators/di';
import { Request, Response } from 'express';
import { DatabaseService } from '@app/src/Service/DatabaseService';

@Controller('/')
@Injectable()
export class HomeController {
  constructor(private databaseService: DatabaseService) {
  }

  @Get('/')
  index(req: Request, res: Response): Response {
    console.log(this.databaseService);
    return res.status(OK).json({ status: OK });
  }
}