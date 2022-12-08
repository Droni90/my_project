import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ArticlesSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticlesPageInited } from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlesPageInited(getState());
  if (!inited) {
    const sortFromUrl = searchParams.get('sort') as ArticlesSortField;
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType;

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
