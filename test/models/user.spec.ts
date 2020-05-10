import { connect } from '@app/orm';
import { get, def } from 'bdd-lazy-var/getter';
import * as dotenv from 'dotenv';
import { User } from '../../app/src/entity/User';

dotenv.config();

describe('User model', async (): Promise<void> => {
  console.log('connect', await connect());
  const repo = (await connect()).getRepository(User);
  def('User', () => repo.create(get('params')));

  describe('Validation', () => {
    it('should throw errors', () => {
      def('params', () => ({
        firstName: 'Paul',
        lastName: 'Shkivenko',
        username: 'username',
      }));

      console.log(get('User'));
      expect(get('User').errors).toHaveProperty('');
    });
  });
});
