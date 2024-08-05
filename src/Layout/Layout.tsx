import { FC } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/shared/AppBar/AppBar";
import styles from "./Layout.module.scss";

const Root: FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
