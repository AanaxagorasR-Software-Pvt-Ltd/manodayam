import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  API_ADMIN_URL,
  ADD_CART_API,
  ADD_ALL_CART,
  DELETE_DATA,
  UPDATE_QUANTITY,
} from "../utill/api.endpoints";

// var quen = 2;
// {
//   localStorage.getItem("quent");
// }
export default function Cart(props) {
  const [slug, setSlug] = useState(useParams().slug);
  const [responseData, setResponseData] = useState([]);
  const [quantity, setquantity] = useState(1);
  // const {slug} = useParams();
  useEffect(() => {
    // alert(slug);
    setSlug(slug);
    console.log("slug", slug);

    // console.log("0000000",  localStorage.getItem("quent"));
  }, []);

  // const ProductCart = () => {
  //   console.log(`${API_ADMIN_URL}${ADD_CART_API}`);

  //   axios
  //     .post(`${API_ADMIN_URL}${ADD_CART_API}/${slug}`)
  //     .then((res) => {
  //       setResponseData(res.data.data);
  //       console.log("----Cart----", res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  useEffect((props) => {
    // ProductCart(props);
    allproduct();
  }, []);

  // const plus = () => {
  //   setquantity(quantity + 1);
  //   // const quen = quantity * 3
  // };
  localStorage.setItem("quent", quantity);
  // const Minus = () => {
  //   if (quantity >= 2) setquantity(quantity - 1);

  //   setSlug(slug);

  // };
  const allproduct = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    axios
      .post(`${API_ADMIN_URL}${ADD_ALL_CART}?userId=${user._id}`)
      .then((res) => {
        setResponseData(res.data.data);
        console.log("new", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateQuantity = (quantity, _id, index) => {
    let copy = [...responseData];
    copy[index].quantity = quantity;
    setResponseData(copy);
    const addlist = {
      quantity: quantity,

      _id: _id,
    };
    axios
      .post(`${API_ADMIN_URL}${UPDATE_QUANTITY}`, addlist)
      .then((res) => {
        setResponseData(res.data.data);
        console.log("new", res.data);

        allproduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteData = (_id) => {
    axios
      .delete(`${API_ADMIN_URL}${DELETE_DATA}/${_id}`)
      .then((res) => {
        // alert(res?.message);

        allproduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };
 const Backclick =()=>{
   window.history.back()
 }
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
                    <Link to="/">Home / &nbsp;</Link>
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
                <h2>My Cart</h2>
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
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseData &&
                      responseData.map((element, index) => (
                        <tr key={element._id}>
                          {/* <td>
                            <img src={element.products.img_url} alt="" />
                          </td> */}
                          {/* <td>{element.products.product_name}</td> */}
                          <td> {index + 1}</td>
                          <td>
                            <Link to={"/ViewProduct/" + element.products.slug}>
                              {element.products.product_name}
                            </Link>
                          </td>

                          <td>
                            <i className="fa fa-inr"></i> {element.products.mrp}
                            {/* {element.mrp * localStorage.getItem("Password")} */}
                          </td>
                          <td>
                            <div className="d-inline-flex">
                              <div
                                className="bg-light rounded-bottom rounded-top border h-25 p-1"
                                onClick={() =>
                                  updateQuantity(
                                    element.quantity - 1,
                                    element._id,
                                    index
                                  )
                                }
                              >
                                <div>
                                  <i className="fa fa-minus"></i>
                                </div>

                                {/* <div>
                                  <Link to="/">
                                    <i className="fa fa-minus text-dark"></i>
                                  </Link>
                                </div> */}
                              </div>
                              <h5 className="ml-3 mt-2 text-dark font-weight-bold">
                                {element.quantity}
                              </h5>

                              <div
                                className="ml-3 bg-light rounded-bottom rounded-top border h-25 p-1"
                                onClick={() =>
                                  updateQuantity(
                                    element.quantity + 1,
                                    element._id,
                                    index
                                  )
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </div>
                            </div>
                          </td>

                          <td>
                            <i className="fa fa-inr"></i>{" "}
                            {element.products.shipping}
                          </td>
                          <td>
                            <i className="fa fa-inr"></i>{" "}
                            {element.quantity * element.products.mrp +
                              parseFloat(element.products.shipping)}
                            {/* {element.mrp * localStorage.getItem("Password")} */}
                          </td>
                          <td>
                            <button
                              className="btn"
                              onClick={() => deleteData(element._id)}
                            >
                              <i className="fas fa-trash-alt"></i>
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
                      <td></td>

                      <td>
                        <button className="btn-web hvr-float-shadow">
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
      <Link to="">
        <div
          data-placement="top"
          tabindex="0"
          data-toggle="tooltip"
          title="Previous page"
          className="bd-dark"
          onClick={Backclick}
        >
          <li className="scrollToTop fa fa-chevron-left backbtn"></li>
        </div>
      </Link>
    </>
  );
}
