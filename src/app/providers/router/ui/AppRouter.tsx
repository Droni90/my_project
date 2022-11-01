import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Routes } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );
    return (
      <Route
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
        key={route.path}
      />
    );
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);
