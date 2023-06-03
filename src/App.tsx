import { HeaderComponent } from "./components/Header";

import { RootRouter } from "./Router/Router";
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
