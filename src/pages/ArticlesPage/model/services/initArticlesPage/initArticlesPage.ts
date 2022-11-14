import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticlesPageInited } from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlesPageInited(getState());
  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
