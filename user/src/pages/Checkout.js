import React from "react";
import { Link } from "react-router-dom";
export default function Checkout() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Checkout</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Checkout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="checkout-form doctor-form">
                <h2>Billing Address</h2>

                <form action="">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Full Name</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Email Adress</label>
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Contact No.</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Phone no."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Company Name</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label for="">Address line 1</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Address line 1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label for="">Address line 2</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Address line 2"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Country</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Town/City</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Town/City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">State </label>
                        <input type="text" name="" id="" placeholder="State" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Postal Code</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inline">
                        <input type="radio" name="" id="" />
                        <p>G-130, Sector 63, Noida, Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="checkout-detail">
                    <h2>Cart Total</h2>
                    <div className="form-inline">
                      <label for="">
                        <h3>Product</h3>
                      </label>
                      <span>
                        <h3>Total</h3>
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Fidget Cube</label>
                      <span>
                        <i className="fa fa-inr"></i> 799
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Fidget Cube</label>
                      <span>
                        <i className="fa fa-inr"></i> 799
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Fidget Cube</label>
                      <span>
                        <i className="fa fa-inr"></i> 799
                      </span>
                    </div>
                    <hr />
                    <div className="form-inline">
                      <label for="">Sub Total</label>
                      <span>
                        <i className="fa fa-inr"></i> 2100
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Shipping Fee</label>
                      <span>
                        <i className="fa fa-inr"></i> 00.0
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">
                        <h3>Grand Total</h3>
                      </label>
                      <span>
                        <h3>
                          <i className="fa fa-inr"></i> 2100
                        </h3>
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <div className="col-lg-12">
                  <div className="checkout-detail">
                    <h2>Payment Method</h2>
                    <div className="form-inline">
                      <label for="">Cash On Delivery</label>
                      <span>
                        <input type="radio" name="" id="" />
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Direct Bank Transfer</label>
                      <span>
                        <input type="radio" name="" id="" />
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Paypal</label>
                      <span>
                        <input type="radio" name="" id="" />
                      </span>
                    </div>
                    <hr />
                    <div className="form-inline">
                      <label for="">Sub Total</label>
                      <span>
                        <i className="fa fa-inr"></i> 2100
                      </span>
                    </div>

                    <div className="checkout-button">
                      <button className="btn-web hvr-float-shadow">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
