import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({ test: 'test' });
    expect(params).toBe('?test=test');
  });
  test('test with some param', () => {
    const params = getQueryParams({ test: 'test', test2: 'test2' });
    expect(params).toBe('?test=test&test2=test2');
  });
  test('test with one param', () => {
    const params = getQueryParams({ test: 'test', test2: undefined });
    expect(params).toBe('?test=test');
  });
});
