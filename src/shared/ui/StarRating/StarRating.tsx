import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];
export const StarRating = memo((props: StarRatingProps) => {
  const { className, selectedStars = 0, onSelect, size = 30 } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };
  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentStarsCount(starCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames('', [className])}>
      {stars.map((star) => (
        <Icon
          onClick={onClick(star)}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(star)}
          width={size}
          height={size}
          className={classNames(
            cls.starIcon,
            [currentStarsCount >= star ? cls.hovered : cls.normal],
            { [cls.selected]: isSelected },
          )}
          key={star}
          Svg={StarIcon}
          data-testid={`StarRating.${star}`}
          data-selected={currentStarsCount >= star}
        />
      ))}
    </div>
  );
});
