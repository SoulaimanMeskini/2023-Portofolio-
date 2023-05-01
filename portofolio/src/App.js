import React from "react";

import { HeaderComponent } from "./components/Header.js";

import { RootRouter } from "./Router/Router.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RootRouter />
        <HeaderComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
