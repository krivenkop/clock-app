import { createConnection, getConnectionOptions } from 'typeorm';

export const connect = async () => {
  try {
    return await createConnection(
      await getConnectionOptions(process.env.NODE_ENV || process.env.ENVIRONMENT),
    );
  } catch (e) {
    console.error('Cannot connect to db', e);
    return null;
  }
};
