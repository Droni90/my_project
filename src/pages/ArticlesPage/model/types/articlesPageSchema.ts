import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewEnum } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewEnum;
}
