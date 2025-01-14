import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
