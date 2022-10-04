import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">
      <Routes>
        {Object.values(routeConfig).map(({ element, path }: RouteProps) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </div>
  </Suspense>
);

export default AppRouter;
