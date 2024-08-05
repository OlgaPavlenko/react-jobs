import "./utils/reset.css";

import { Route, Routes } from "react-router-dom";

import { Card } from "./components/Card/Card";
import { FC } from "react";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";

const App: FC = () => {
  return (
    <div>
      <div className="container">
        <Layout />
        <Routes>
          <Route index path="/redux-todos/" element={<Login />} />
          <Route path="/redux-todos/Home" element={<Login />} />
          <Route path="/redux-todos/Todos" element={<Card />} />
          <Route path="/redux-todos/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
