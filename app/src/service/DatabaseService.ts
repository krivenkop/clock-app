import { createConnection, Connection } from 'typeorm';
import { Injectable } from '@decorators/di';
import { connect } from '@app/orm';

@Injectable()
export class DatabaseService {
  connection: Connection;

  constructor() {
    (async () => {
      this.connection = await this.connect();
    })();
  }

  async connect() {
    return connect();
  }
}
