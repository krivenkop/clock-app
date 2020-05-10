import { createConnection } from 'typeorm';

export const connect = async () => {
  try {
    return await createConnection({
      type: 'postgres',
      host: 'db',
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
    console.error('Cannot connect to db', e);
    return null;
  }
};
