import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const { t } = useTranslation();
  return (
    <Page className={classNames(cls.ArticleEditPage, [className])}>
      {isEdit
        ? t(`Редактирование статьи с ID = ${id}`)
        : t('Создание новой статьи')}
    </Page>
  );
});

export default ArticleEditPage;
