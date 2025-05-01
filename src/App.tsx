
import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/terms" element={<TermsPage />}></Route>
      <Route path="/product/:productSlug" element={<ProductPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
