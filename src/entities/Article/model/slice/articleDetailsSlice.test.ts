import { Article } from '../types/article';
import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'Anri',
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о .',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить  Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n ;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScужаются в браузер для в него следующий код:',
      ],
    },
  ],
};

describe('articleDetailsSlice.test', () => {
  test('test fetchArticleById pending', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({ isLoading: true });
  });

  test('test fetchArticleById fullfiled', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(article, '1', '1')
      )
    ).toEqual({
      isLoading: false,
      data: article,
    });
  });
});
