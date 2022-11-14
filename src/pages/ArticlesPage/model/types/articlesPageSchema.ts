import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewEnum } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewEnum;
  page: number;
  limit?: number;
  hasMore: boolean;
  _inited: boolean;
}
