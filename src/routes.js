import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Erro from "./pages/Erro";

function RoutesApp() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/signin', '/signup'];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      {children}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default RoutesApp;