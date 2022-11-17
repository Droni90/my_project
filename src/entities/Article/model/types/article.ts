import { User } from 'entities/User';

export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  CODE = 'CODE',
}

export enum ArticleViewEnum {
  TILE = 'TILE',
  LIST = 'LIST',
}

export enum ArticlesSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  user: User;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
