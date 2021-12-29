import React from "react";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterService } from "../Store/Services/Register";
const schema = yup.object().shape({
  name: yup.string().min(3).required("please provide valid user name."),
  email: yup.string().email().required("please provide valid email."),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const toRegister = () => {
    console.log("tetst======");
    navigate("/admin/login");
  };

  const onSubmitHandler = (data) => {
    console.log("data", data);
    const data_ = { ...data, ...{ type: "admin" } };
    dispatch(RegisterService(data_));
  };
  console.log("errors", errors);
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="../images/logo.png" alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form className="pt-3" onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      className="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="name"
                    />
                    {errors.username && (
                      <span className="validationError">
                        {errors?.username?.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="validationError">
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group" style={{ display: "none" }}>
                    <select
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                    >
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
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
                    {errors.password && (
                      <span className="validationError">
                        {errors?.password?.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="passwordConfirmation"
                      {...register("passwordConfirmation")}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="confirm Password"
                    />
                    {errors.passwordConfirmation && (
                      <span className="validationError">
                        {errors?.passwordConfirmation?.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />I
                        agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      href="javascript:void(0)"
                      value="SIGN UP"
                    />
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <a
                      href="javascript:void(0)"
                      onClick={toRegister}
                      className="text-primary"
                    >
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
};
export default Register;
