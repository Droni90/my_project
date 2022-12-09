import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import {
  useGetArticleRating,
  useRateArticle,
} from '../../api/ArticleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (startCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          userId: userData?.id ?? '',
          rate: startCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onAccept = useCallback(
    (startCount: number, feedback?: string) => {
      handleRateArticle(startCount, feedback);
    },
    [handleRateArticle]
  );
  const onCancel = useCallback(
    (startCount: number) => {
      handleRateArticle(startCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('Оцените статью')}
      feedBackTitle={t(
        'Оставьте свой отзыв о статье, это поможет улучшить качество'
      )}
      hasFeedback
      className={className}
    />
  );
});

export default ArticleRating;
