import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";

// import { enableDebugTool } from "@webspatial/react-sdk";

// enableDebugTool();

const basename =
  (process.env.XR_ENV && `/webspatial/${process.env.XR_ENV}`) || "";

function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
