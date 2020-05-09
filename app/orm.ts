import { Connection, createConnection } from 'typeorm';

export const connect = async (): Promise<Connection> | null => {
  try {
    return await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [
        '@app/src/entity/*.js',
      ],
      migrations: [
        '@app/src/migration/*.js',
      ],
      subscribers: [
        '@app/src/subscriber/*.js',
      ],
      synchronize: true,
    });
  } catch (e) {
    console.error('Cannot connect to db');
    return null;
  }
};
