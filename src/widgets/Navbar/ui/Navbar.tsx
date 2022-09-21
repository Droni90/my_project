import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, [className])}>
      <ThemeSwitcher className="" />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
