import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/Popup.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}
export const Popover = (props: PopoverProps) => {
  const { className, direction = 'bottom right', trigger, children } = props;

  const menuClasses = [mapDirectionClass[direction]];
  return (
    <HPopover className={classNames('', [className, popupCls.popup])}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};