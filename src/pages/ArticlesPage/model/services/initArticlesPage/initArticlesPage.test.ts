import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
const params = new URLSearchParams();

describe('initArticlesPage.test', () => {
  test('inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });
    await thunk.callThunk(params);
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).toBeCalledTimes(0);
  });

  test('not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk(params);
    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledTimes(1);
  });
});
