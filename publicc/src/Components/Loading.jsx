import React from "react";
import ReactLoading from "react-loading";

const Example = ({ type = "spokes", color = "black" }) => (
  <ReactLoading type={type} color={color} className="loading" />
);
export default Example;
