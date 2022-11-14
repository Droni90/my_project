import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleViewEnum } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewEnum;
  onViewClick: (view: ArticleViewEnum) => void;
}

const viewTypes = [
  { view: ArticleViewEnum.TILE, icon: TiledIcon },
  { view: ArticleViewEnum.LIST, icon: ListIcon },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onCLick = (newView: ArticleViewEnum) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ThemeButton.CLEAR}
          onClick={onCLick(viewType.view)}
        >
          <Icon
            className={classNames('', [], {
              [cls.notSelected]: viewType.view === view,
            })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
