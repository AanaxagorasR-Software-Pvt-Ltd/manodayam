
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { Modal, Button } from "react-bootstrap";
import { UPDATE_QUANTITY,API_ADMIN_URL ,ADD_ALL_CART} from "../utill/api.endpoints";

export default function Checkout() {

  const [show, setshow] = useState(false);
  const [totalamount, settotalamount] = useState(0);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [responseData, setResponseData] = useState([]);
  const formiks = useFormik({
    initialValues: {
      Fullname: "",
      Contact: "",
      Companyname: "",
      email: "",
      Address1: "",
      Address2: "",
      Country: "",
      TownCity: "",
      State: "",
      PostalCode: ""
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        let resp = await axios.post(
        
          values
        );
        if (resp.data.status) {
          formiks.resetForm();
          setAlerdata({
            title: "Congratulations",
            body: "your order  is confirm Successfully",
          });
          setshow(true);
          window.location.reload();
        } else {

          setshow(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  const allproduct = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    axios.post(`${API_ADMIN_URL}${ADD_ALL_CART}?userId=${user._id}`)
      .then((res) => {
       
        let items = res.data.data
        let sum= 0;
        for (let i = 0; i < items.length; i++) {
      
       
        sum = sum + (items[i].products.mrp * items[i].quantity);
        }
        settotalamount(sum);



      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const totalQuantity = (quantity,productsmrp, _id) => {
  //   const addlist = {

  //     quantity: quantity,

  //     _id: _id,

  //   }
  //   axios
   
  //     .then((res) => {
  //       setResponseData(res.data.data);
  //       const sum=0;
  //         for(var i=0; i<Array.length;i++){
  //           sum=sum+(quantity * productsmrp)
  //         }


  //         settotalamount()
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
    
  // };
  const handleClose = () => setshow(false);
  // const totalproduct=()=>{
  //   const sum=0;
  //   for(var i=0; i<Array.length;i++){
  //     sum=sum+(quantity * products.mrp)
  //   }
  // }
  useEffect((props) => {
 
    allproduct();
  }, []);
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
                      <buttton
                        className="btn hvr-float-shadow"
                      // onClick={() => loginsubmit("/bookingAppoint")}
                      // onclick={()=>(checkout)}
                      >
                        <span style={{ color: "#23adba" }}>Submit</span>
                      </buttton>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="checkout-detail">
                    <h2>Order Detail</h2>
                    <div className="form-inline">
                      <label for="">
                        <h3>Product</h3>
                      </label>
                      <span>
                        <h3>Total</h3>
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">Total Product Price</label>
                      <span>
                        <i className="fa fa-inr"></i> {totalamount}
                        
                      </span>
                    </div>
                   
                    
                    <hr />
                   
                    <div className="form-inline">
                      <label for="">Shipping Fee</label>
                      <span>
                        <i className="fa fa-inr"></i> 00.0
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="">
                        <h3>Payable Amount</h3>
                      </label>
                      <span>
                        <h3>
                          <i className="fa fa-inr"></i> {totalamount}
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
                      <label for="option_1">Cash On Delivery</label>
                      <span>
                        <input type="radio" name="option" id="option_1" />
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="option_2">Direct Bank Transfer</label>
                      <span>
                        <input type="radio" name="option" id="option_2" />
                      </span>
                    </div>
                    <div className="form-inline">
                      <label for="option_3">Paypal</label>
                      <span>
                        <input type="radio" name="option" id="option_3" />
                      </span>
                    </div>
                    <hr />
                    <div className="form-inline">
                      <label for="">Sub Total</label>
                      <span>
                        <i className="fa fa-inr"></i> {totalamount}
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
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{alertData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertData.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
