import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_ADMIN_URL, ADD_CART_API } from "../utill/api.endpoints";

// var quen = 2;
// {
//   localStorage.getItem("quent");
// }
export default function Cart(props) {
  const [quantity, setquantity] = useState(1);
  const plus = () => {
    setquantity(quantity + 1);
    // const quen = quantity * 3
  };
  // localStorage.setItem("quent", quantity);
  const Minus = () => {
    if (quantity >= 2) setquantity(quantity - 1);
  };
  const [slug, setSlug] = useState(useParams().slug);
  // const {slug} = useParams();
  useEffect(() => {
    // alert(slug);
    setSlug(slug);
    console.log("slug", slug);

    // console.log("0000000",  localStorage.getItem("quent"));
  }, []);
  const [responseData, setResponseData] = useState([]);
  const ProductCart = () => {
    console.log(`${API_ADMIN_URL}${ADD_CART_API}`);

    axios
      .post(`${API_ADMIN_URL}/${ADD_CART_API}/${slug}`)
      .then((res) => {
        setResponseData(res.data.data);
        console.log("----Cart----", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    ProductCart(props);
  }, []);
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Add To Cart</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Add To Cart</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-heading">
                <h2>Products In Your Cart</h2>
                <br />
              </div>
            </div>
            <br />
            <div className="col-lg-12">
              <div className="cart-table table-responsive">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Shipping charges</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseData.map((element) => (
                      <tr>
                        <td>
                          <img src={element.img_url} alt="" />
                        </td>
                        <td>{element.product_name}</td>
                        <td>
                          <i className="fa fa-inr"></i> {element.mrp}
                          {/* {element.mrp * localStorage.getItem("Password")} */}
                        </td>
                        {/* <td>{localStorage.getItem("quent")}</td> */}
                        <div className="d-inline-flex ml-5 mt-2">
                          <div onClick={Minus}>
                            <i className="fa fa-minus bg-light rounded-bottom rounded-top border h-75 p-1"></i>
                          </div>
                          <h5 className="ml-3 mt-2 text-dark font-weight-bold">
                            {quantity}
                          </h5>
                          <div onClick={plus}>
                            <i className="fa fa-plus ml-3 bg-light rounded-bottom rounded-top border h-75 p-1"></i>
                          </div>
                        </div>

                        <td>
                          <i className="fa fa-inr"></i> {element.shipping}
                        </td>
                        <td>
                          <button className="del-btn">
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td>
                        <button class="btn-web hvr-float-shadow">
                          {" "}
                          <Link to="/checkout">Checkout</Link>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
