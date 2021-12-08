import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react";
export default function ViewProduct(props) {

  console.log("*********", props);

  const [quantity, setquantity] = useState(0);
  const plus = () => {
    setquantity(quantity + 1);
  };
  const Minus = () => {
    if (quantity >= 1) setquantity(quantity - 1);
  };
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Details of Product</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>View</li>
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
                <h2>Know Better Of Your Product</h2>
                <br />
              </div>
            </div>
            <br />
            <div className="library-section mb-50">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-1 ">
                    <div className="library-card">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="ml-2 library-video ">
                            <img
                              className="w-100"
                              src="assets/image/isolate.jpeg"
                              alt=""
                            />
                          </div>

                          <Link to="/Cart" className="ml-4 mt-4">
                            <button className=" mt-4 ml-4 btn-web hvr-float-shadow">
                              Add to Cart
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-6 offset-1">
                          <div className="library-person">
                            <div className="row">
                              {/* <div className="col-3">
                          <img src="assets/image/doctor-img.jpg" alt="" />
                        </div> */}
                              <div className="col-9">
                                <h3>Impact Whey Isolate</h3>
                                <h5>
                                  One of the purest whey protein powders
                                  available, with 90% protein content...
                                </h5>
                                <div className="service-heading d-inline-flex">
                                  <h5 className="ml-1 bg-light text-dark rounded-bottom rounded-top border p-1">
                                    Vegetarian
                                  </h5>
                                  <h5 className="ml-2 bg-light text-dark rounded-bottom rounded-top border p-1">
                                    Gluten Free
                                  </h5>
                                </div>
                                <div className="mb-3">
                                  <span>₹ 86798</span>
                                </div>
                                <h3 className="text-dark">Quantity:</h3>
                                <div className="d-inline-flex">
                                  <div
                                    className="bg-light rounded-bottom rounded-top border h-25 p-1"
                                    onClick={Minus}
                                  >
                                    <i className="fa fa-minus"></i>
                                  </div>
                                  <h5 className="ml-3 mt-2">{quantity}</h5>
                                  <div
                                    className="ml-3 bg-light rounded-bottom rounded-top border h-25 p-1"
                                    onClick={plus}
                                  >
                                    <i className="fa fa-plus"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6>
                              What are the benefits of Impact Whey Isolate?
                            </h6>
                            <p>
                              The 23g (Unflavoured version) of high-quality
                              protein per serving is perfect for supporting all
                              training goals, contributing to the growth and
                              maintenance of muscle mass, while also being low
                              in fat and containing less than 1g of carbs – the
                              ideal choice if you’re keeping an eye on calories,
                              too.
                            </p>
                            <p>
                              <ReadMoreReact
                                text={
                                  "Enjoy it in a range of specially created flavours, from classic Chocolate Smooth and Strawberry Cream to the indulgent Rocky Road and Salted Caramel."
                                }
                                min={20}
                                ideal={30}
                                max={100}
                                readMoreText="View More"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
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
