import "./utils/reset.css";

import { Card } from "./components/Card/Card";
import { FC } from "react";

const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Card />
      </div>
    </div>
  );
};

export default App;
