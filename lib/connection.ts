import {Pool, QueryResult} from 'pg';

export class Connection {
  connection: Pool;

  constructor() {
    this.connection = new Pool({
      host: 'db',
      port: +process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    });
  }

  async fetchDatabases(): Promise<QueryResult> {
    const query = 'SELECT datname FROM pg_database WHERE datistemplate = false';

    return await new Promise((resolve, reject) => {
      this.connection.query(query, (err, res) => {
        if (err) reject(err);
        else {
          resolve(res);
        }
      });
    });
  }
}
