import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticlesSortField,
  ArticleType,
  ArticleViewEnum,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filteres
  view: ArticleViewEnum;
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
