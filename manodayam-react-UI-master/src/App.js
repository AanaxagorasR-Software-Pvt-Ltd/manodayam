import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Library from "./pages/Library";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Consult from "./pages/Consult";
import Consultvideo from "./pages/Consultvideo";
import Healthheal from "./pages/Healthheal";
import Profile from "./pages/Profile";
import Spirituality from "./pages/Spirituality";
import ViewProduct from "./pages/ViewProduct";
import BookingAppoint from "./pages/BookAppoint";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/support" element={<Support />} exact />
          <Route path="/library" element={<Library />} exact />
          <Route path="/research" element={<Research />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/checkout" element={<Checkout />} exact />
          <Route path="/counsult" element={<Consult />} exact />
          <Route path="/counsultvideo" element={<Consultvideo />} exact />
          <Route path="/healthheal" element={<Healthheal />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/spirituality" element={<Spirituality />} exact />
          <Route path="/ViewProduct/:slug" element={<ViewProduct />} exact />
          <Route path="/bookingAppoint" element={<BookingAppoint />} exact />
        </Routes>

        <Footer />
      </BrowserRouter>
      {/* <InternalRoute /> */}
    </>
  );
}

export default App;
