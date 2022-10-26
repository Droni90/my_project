import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false;
        }
        return true;
      }),
    [isAuth]
  );
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Routes>
          {routes.map(({ element, path }: RouteProps) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);
