import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { UserLogin } from "../Store/Services/Login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { logoutClean } from "../Store/slices/login.slice";
import LoadingContainer from "../Components/Loading";

const schema = yup.object().shape({
  email: yup.string().email().required("please provide valid email."),
});
const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.userLogin);

  const { user } = useSelector((store) => store.userLogin) ?? { user: null };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    dispatch(UserLogin(data));
  };
  useEffect(() => {
    if (user && user?.status && user.loginStatus === "undone") {
      dispatch(logoutClean(user));
      navigate("/");
    }
  }, [user]);

  const toRegister = () => {
    navigate("/admin/register");
  };

  console.log("propd", loading);
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src="../images/logo.png" alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <form className="pt-3"
              onSubmit={handleSubmit(onSubmitHandler)}
              >
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    {...register("email")}
                    id="exampleInputEmail1"
                    placeholder="Username"
                  />
                  {errors.email && (
                    <span className="validationError">
                      {errors?.email?.message}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-3">

                  <Link to="/Main">
                    <button
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" 
                    >

                      Sign In
                    </button>
                  </Link>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      Keep me signed in
                    </label>
                  </div>
                  <Link to ="/admin/forgotpassword" className="auth-link text-black">
                    Forgot password?
                  </Link>
                </div>
                <div className="mb-2" style={{ display: "none" }}>
                  <button
                    type="submit"
                    className="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i className="ti-facebook mr-2"></i>Connect using facebook
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account?{" "}
                  <a
                    href="javascript:void(0)"
                    onClick={toRegister}
                    className="text-primary"
                  >
                    Create New Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
