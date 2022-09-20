import { useContext, useState } from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./styles/index.scss";
import { UseTheme } from "app/providers/ThemeProvider/lib/UseTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}> СМЕНИТЬ ТЕМУ </button>
      <AppRouter />
    </div>
  );
};

export default App;
