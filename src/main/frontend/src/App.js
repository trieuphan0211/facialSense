import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Router";

function App() {
  return (
    <div className="App font-montserrat">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
