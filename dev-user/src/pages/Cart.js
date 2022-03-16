import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_ADMIN_URL, ADD_CART_API ,ADD_ALL_CART} from "../utill/api.endpoints";

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

 
  const plus = () => {
    setquantity(quantity + 1);
    // const quen = quantity * 3
  };
  localStorage.setItem("quent", quantity);
  const Minus = () => {
    if (quantity >= 2) setquantity(quantity - 1);

    setSlug(slug);

  };
  const allproduct = () => {
    let user = JSON.parse(localStorage.getItem("user"));
   axios
     .post(`${API_ADMIN_URL}${ADD_ALL_CART}?userId=${user._id}` )
     .then((res) => {
       setResponseData(res.data.data);
       console.log("new", res.data);
  
      
       
     })
     .catch((error) => {
       console.log(error);
     });
 };
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
                      {/* <th>Shipping charges</th> */}
                      <th>Subtotal {quantity} item</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseData && responseData.map((element) => (
                      <tr key={element._id}>
                        <td>
                          <img src={element.products.img_url} alt="" />
                        </td>
                        <td>{element.products.product_name}</td>
                        <td>
                          <i className="fa fa-inr"></i> {element.products.mrp}
                          {/* {element.mrp * localStorage.getItem("Password")} */}
                        </td>
                        <td>
                          <div className="d-inline-flex">
                            <div
                              className="bg-light rounded-bottom rounded-top border h-25 p-1"
                              onClick={Minus}
                            >
                              {quantity !== 1 ? (
                                <div>
                                  <i className="fa fa-minus"></i>
                                </div>
                              ) : (
                                <div>
                                  <Link to="/">
                                    <i className="fa fa-minus text-dark"></i>
                                  </Link>
                                </div>
                              )}
                            </div>
                            <h5 className="ml-3 mt-2 text-dark font-weight-bold">
                              {quantity}
                            </h5>
                          
                            <div
                              className="ml-3 bg-light rounded-bottom rounded-top border h-25 p-1"
                              onClick={plus}
                            >
                              <i className="fa fa-plus"></i>
                            </div>
                          </div>
                        </td>
                        
                        {/* <td>
                          <i className="fa fa-inr"></i> {element.shipping}
                        </td> */}
                        <td>
                          <i className="fa fa-inr"></i> {quantity* element.products.mrp}
                          {/* {element.mrp * localStorage.getItem("Password")} */}
                        </td>
                        <td>
                          <button className="btn">
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
    </>
  );
}
