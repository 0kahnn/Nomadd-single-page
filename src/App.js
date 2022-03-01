import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/color-1.css";
import "./assets/css/responsive.css";
import "./assets/css/custom.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
export default App;
