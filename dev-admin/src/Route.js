import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Loader from "./Components/Loading";
import { useSelector } from "react-redux";
import ToastNote from "./Components/ToastNotification";
import AppointmentList from "./pages/Appointment";
import BookedAppointmentList from "./pages/BookedAppointment";
import Category from "./pages/Category";
import Doctor from "./pages/Doctor";
import Video from "./pages/Video";
import MediaSolutions from "./pages/MediaSolutions";
import Audio from "./pages/Audio";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Sells from "./pages/Sells";
import Questions from "./pages/Questions";
import Banner from "./pages/Banner";
import Spirituality from "./pages/Spirituality";
import YesNoQues from "./pages/YesNoQues";
import Library from "./pages/Library";
import LibraryAppoint from "./pages/LibraryAppoint";
import LibraryAppointBooked from "./pages/LibraryAppointBooked";
import AboutCategory from "./pages/AboutCategory";
import Userslist from "./pages/Userslist";
import AboutUs from "./pages/AboutUs";
const Login = React.lazy(() => import("./pages/Login"));
const ProtectedRoute = React.lazy(() => import("./Auth/Protected"));
const Register = React.lazy(() => import("./pages/Register"));
const Forgotpassword = React.lazy(() => import("./pages/Forgotpassword"));

const InternalRoute = (props) => {
  const { loading } = useSelector((store) => store.userLogin);
  console.log("isLoading", loading);
  return (
    <BrowserRouter basename="/manodayam-admin">
      <Suspense fallback={<Loader type="spokes" color="red" />}>
        {loading ? <Loader type="spokes" color="red" /> : null}

        <Routes>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgotpassword" element={<Forgotpassword />} />
          <Route path="/Main" element={<Main />} exact />
          <Route path="/appointment-list" element={<AppointmentList />} exact />
          <Route path="/questions" element={<Questions />} exact />
          <Route path="/yes-no-questions" element={<YesNoQues />} exact />
          <Route path="/library" element={<Library />} exact />
          <Route path="/users-list" element={<Userslist />} exact />
          <Route
            path="/library-appointment"
            element={<LibraryAppoint />}
            exact
          />
          <Route
            path="/library-appointment-booked"
            element={<LibraryAppointBooked />}
            exact
          />
          <Route path="/banner" element={<Banner />} exact />
          <Route
            path="/booked-appointment-list"
            element={<BookedAppointmentList />}
            exact
          />
          <Route path="/category" element={<Category />} exact />
          <Route path="/about-category" element={<AboutCategory />} exact />
          <Route path="/spirituality" element={<Spirituality />} exact />
          <Route path="/about-us" element={<AboutUs />} exact />

          
          <Route
            path="admin/media-solutions"
            element={<MediaSolutions />}
            exact
          />
          <Route path="/admin/Video" element={<Video />} exact />
          <Route path="admin/Audio" element={<Audio />} exact />
          <Route path="/admin/order" element={<Order />} exact />
          <Route path="/admin/product" element={<Product />} exact />
          <Route path="/admin/sells" element={<Sells />} exact />
          <Route exact path="/admin/login" element={<ProtectedRoute />}></Route>
          <Route path="/doctor-list" element={<Doctor />} exact />
          <Route path="/" element={<ProtectedRoute />}>
            <Route exact path="/admin/Main" element={<Main />} />
          </Route>
          Questions
        </Routes>
      </Suspense>
      <ToastNote />
    </BrowserRouter>
  );
};
export default InternalRoute;
