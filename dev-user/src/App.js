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
import MentalHealth from "./pages/MentalHealth";
import Profile from "./pages/Profile";
import Spirituality from "./pages/Spirituality";
import ViewProduct from "./pages/ViewProduct";
import BookingAppoint from "./pages/BookAppoint";
import Appointment from "./pages/Appointment";
import AllmentalHealth from "./pages/AllmentalHealth";
import Aboutus from "./pages/Aboutus";
import PrimarySprituality from "./pages/PrimarySprituality";
import PrimaryLibrary from "./pages/PrimaryLibrary";
import HowWeDo from "./pages/HowWeDo";
import SelfAwareness from "./pages/SelfAwareness";
import EcoSystem from "./pages/EcoSystem";
import Therapy from "./pages/Therapy"


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/support" element={<Support />} exact />
          <Route path="/library" element={<Library />} exact />
          <Route path="/research" element={<Research />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/cart/:slug" element={<Cart />} exact />
          <Route path="/checkout" element={<Checkout />} exact />
          <Route path="/counsult" element={<Consult />} exact />
          <Route path="/counsultvideo" element={<Consultvideo />} exact />
          <Route path="/mentalHealth/:slug" element={<MentalHealth />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/spirituality" element={<Spirituality />} exact />
          <Route path="/ViewProduct/:slug" element={<ViewProduct />} exact />
          <Route path="/bookingAppoint" element={<BookingAppoint />} exact />
          <Route path="/appointment" element={<Appointment />} exact />
          <Route
            path="/all-mental-wellness"
            element={<AllmentalHealth />}
            exact
          />
          <Route path="/about-us" element={<Aboutus />} exact />
          <Route
            path="/primary-sprituality"
            element={<PrimarySprituality />}
            exact
          />
          <Route path="/primary-library" element={<PrimaryLibrary />} exact />
          <Route path="/how-we-do" element={<HowWeDo />} exact />
          <Route path="/self-awareness" element={<SelfAwareness />} exact />
          <Route path="/eco-system" element={<EcoSystem />} exact />
          <Route path="/therapy" element={<Therapy />} exact />


                   
        </Routes>

        <Footer />
      </BrowserRouter>
      {/* <InternalRoute /> */}
    </>
  );
}

export default App;
