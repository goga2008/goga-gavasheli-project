import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Products from "./page/Products";
import ScrollToTop from "./components/ScrollToTop";


function App(){
  return(
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App