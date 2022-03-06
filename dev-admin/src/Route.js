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
import ShakthiQuestion from "./pages/ShakthiQuestion";
import LibraryGroupAppoint from "./pages/LibraryGroupAppoint";
import LibraryGroupBooked from "./pages/LibraryGroupBooked";




const Login = React.lazy(() => import("./pages/Login"));
const ProtectedRoute = React.lazy(() => import("./Auth/Protected"));
const Register = React.lazy(() => import("./pages/Register"));
const Forgotpassword = React.lazy(() => import("./pages/Forgotpassword"));

const InternalRoute = (props) => {
  const { loading } = useSelector((store) => store.userLogin);
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loader type="spokes" color="red" />}>
        {loading ? <Loader type="spokes" color="red" /> : null}

        <Routes>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgotpassword" element={<Forgotpassword />} />
          <Route path="/admin/dashboard" element={<Main />} exact />
          <Route path="/admin/appointment-list" element={<AppointmentList />} exact />
          <Route path="/admin/questions" element={<Questions />} exact />
          <Route path="/admin/yes-no-questions" element={<YesNoQues />} exact />
          <Route path="/admin/library" element={<Library />} exact />
          <Route path="/admin/users-list" element={<Userslist />} exact />
          <Route
            path="/admin/library-appointment"
            element={<LibraryAppoint />}
            exact
          />
          <Route
            path="/admin/library-appointment-booked"
            element={<LibraryAppointBooked />}
            exact
          />
          <Route path="/admin/banner" element={<Banner />} exact />
          <Route
            path="/admin/booked-appointment-list"
            element={<BookedAppointmentList />}
            exact
          />
          <Route path="/admin/category" element={<Category />} exact />
          <Route path="/admin/about-category" element={<AboutCategory />} exact />
          <Route path="/admin/spirituality" element={<Spirituality />} exact />
          <Route path="/admin/about-us" element={<AboutUs />} exact />

          
          <Route
            path="/admin/media-solutions"
            element={<MediaSolutions />}
            exact
          />
          <Route path="/admin/Video" element={<Video />} exact />
          <Route path="admin/Audio" element={<Audio />} exact />
          <Route path="/admin/order" element={<Order />} exact />
          <Route path="/admin/product" element={<Product />} exact />
          <Route path="/admin/sells" element={<Sells />} exact />
          <Route exact path="/admin/login" element={<ProtectedRoute />}></Route>
          <Route path="/admin/doctor-list" element={<Doctor />} exact />
          <Route path="/admin/shakthi-ques" element={<ShakthiQuestion />} exact />
          <Route path="/admin/group-appoint" element={<LibraryGroupAppoint />} exact />
          <Route path="/admin/group-appoint-book" element={<LibraryGroupBooked />} exact />


          
          <Route path="/" element={<ProtectedRoute />}>
            <Route exact path="/admin/dashboard"  element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastNote />
    </BrowserRouter>
  );
};
export default InternalRoute;
