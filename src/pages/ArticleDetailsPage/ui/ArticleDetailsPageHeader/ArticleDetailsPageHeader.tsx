import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';

import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const { t } = useTranslation();

    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <div className={classNames(cls.ArticleDetailsPageHeader, [className])}>
        <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
          {t('Назад к списку')}
        </Button>
        {canEdit && (
          <Button
            className={cls.editBtn}
            onClick={onEditArticle}
            theme={ThemeButton.OUTLINE}
          >
            {t('Редактировать')}
          </Button>
        )}
      </div>
    );
  }
);