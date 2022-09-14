import { useContext, useState } from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./styles/index.scss";
import { UseTheme } from "app/providers/ThemeProvider/lib/UseTheme";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Link to="/main">Main</Link>
      <Link to="/noMain">No Main</Link>
      <button onClick={toggleTheme}> СМЕНИТЬ ТЕМУ </button>
      <Routes>
        <Route path="/noMain"></Route>
      </Routes>
    </div>
  );
};

export default App;
