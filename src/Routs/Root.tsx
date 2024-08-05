import { Link, Outlet } from "react-router-dom";

import { FC } from "react";

const Root: FC = () => {
  return (
    <nav>
      <div>
        <Link to="/redux-todos/login">Home</Link>
        <Link to="/redux-todos/layout">Todos</Link>
        <Link to="/redux-todos/login">Login</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </nav>
  );
};

export default Root;
