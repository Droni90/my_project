import { useContext, useState } from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { UseTheme } from "./theme/UseTheme";

const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to="/main">Main</Link>
      <Link to="/noMain">No Main</Link>
      <button onClick={toggleTheme}> СМЕНИТЬ ТЕМУ </button>
      <Routes>
        <Route path="/main" element={<Counter />}></Route>
        <Route path="/noMain"></Route>
      </Routes>
    </div>
  );
};

export default App;
