import { LoginSchema } from '../types/LoginShema';
import { loginActions, loginReducer } from './LoginSlice';

describe('loginSlice.test', () => {
  test('test set username', async () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('456')),
    ).toEqual({ username: '456' });
  });

  test('test set password', async () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('456')),
    ).toEqual({ password: '456' });
  });
});
