import { AboutPage } from "pages/production_project_code_source-master/src/pages/AboutPage";
import { MainPage } from "pages/production_project_code_source-master/src/pages/MainPage";
import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routeConfig).map(({ element, path }: RouteProps) => {
            <Route path={path} element={element} key={path} />;
          })}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
