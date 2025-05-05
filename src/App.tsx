import { Route } from "react-router";
import { Routes } from "react-router";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FormHandling from "./pages/FormHandling";


// import HomePage from "./pages/HomePage";
// import TermsPage from "./pages/TermsPage";
// import ProductPage from "./pages/ProductPage";
// import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<ProductsPage />}></Route>
        <Route path="product/:id" element={<ProductDetailPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/form" element={<FormHandling />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
