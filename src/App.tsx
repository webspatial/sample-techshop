import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import Game from "./pages/Game";

import { enableDebugTool } from "@webspatial/react-sdk";

enableDebugTool();

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
        </Routes>
    </Router>
  );
}

export default App;
