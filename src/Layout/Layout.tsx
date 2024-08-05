import { FC } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/shared/AppBar/AppBar";

const Root: FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

export default Root;
