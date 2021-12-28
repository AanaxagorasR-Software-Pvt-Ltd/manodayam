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
const Login = React.lazy(() => import("./pages/Login"));
const ProtectedRoute = React.lazy(() => import("./Auth/Protected"));
const Register = React.lazy(() => import("./pages/Register"));
const Forgotpassword = React.lazy(() => import("./pages/Forgotpassword"));

const InternalRoute = (props) => {
  const { loading } = useSelector((store) => store.userLogin);
  console.log("isLoading", loading);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader type="spokes" color="red" />}>
        {loading ? <Loader type="spokes" color="red" /> : null}

        <Routes>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgotpassword" element={<Forgotpassword />} />
          <Route path="/Main" element={<Main />} exact />
          <Route path="/appointment-list" element={<AppointmentList />} exact />
          <Route
            path="/booked-appointment-list"
            element={<BookedAppointmentList />}
            exact
          />

          <Route path="/category" element={<Category />} />
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
          <Route path="/doctor-list" element={<Doctor />} exact/>
          <Route path="/" element={<ProtectedRoute />}>
            <Route exact path="/admin/Main" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastNote />
    </BrowserRouter>
  );
};
export default InternalRoute;
