import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";


// import ReadMoreReact from "read-more-react";
import { API_ADMIN_URL, VIEW_PRODUCT, AAD_TO_CARTLIST } from "../utill/api.endpoints";
export default function ViewProduct(props) {
  // const {_id} = useParams();
  // console.log("*****###", useParams()._id);
  const [slug, setSlug] = useState(useParams().slug);
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });

  // const {slug} = useParams();
  useEffect(() => {
    // alert(slug);
    setSlug(slug);
    console.log("slug", slug);
  }, []);


  // productlist
  const [responseData, setResponseData] = useState([]);
  const ViewProjuct = () => {
    console.log(`${API_ADMIN_URL}${VIEW_PRODUCT}`);
    // const productlisting = {
    //   collectiontype: "products",
    //   // slug: slug,
    // };
    axios
      .get(`${API_ADMIN_URL}/${VIEW_PRODUCT}/${slug}`)
      .then((res) => {
        setResponseData(res.data.data);
        console.log("----View----", res.data);
       

      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addtocart = (productId) => {

    console.log(`${API_ADMIN_URL}${AAD_TO_CARTLIST}`);
   
    let user = JSON.parse(localStorage.getItem("user"));
    const cart = {
   
      productId:productId,
      userId:user._id,
      quantity:1
    }
    // const productlisting = {
    //   collectiontype: "products",
    //   // slug: slug,
    // };
    axios
      .post(`${API_ADMIN_URL}${AAD_TO_CARTLIST}`,cart )
      .then((res) => {
        // setResponseData(res.data.data);
        console.log("----View----", res.data);
        setAlerdata({
          title: "Wishlist",
          body: "product Add to cart",
        });
        setshow(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect((props) => {
    ViewProjuct(props);
 
  }, []);
 
  const handleClose = () => setshow(false);

  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Product Details</li>
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
            {responseData.map((element) => (
              <div className="library-section mb-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 offset-1 ">
                      <div className="library-card">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="ml-2 library-video ">
                              <img src={element.img_url} alt="" />
                            </div>
                            {/* <Link */}
                            {/* to={{ pathname: "/Cart/" + slug }}
                              className="ml-4 mt-4"
                            > */}
                            <button className=" mt-4 ml-4 btn-web hvr-float-shadow" onClick={()=>addtocart(element._id)}>
                              Add to Cart
                            </button>
                            {/* </Link> */}
                            <Link
                              to={{ pathname: "/Cart/" + slug }}
                              className="ml-4 mt-4"
                            >
                              <button className=" mt-4 ml-4 btn-web hvr-float-shadow">
                                Go  to Cart
                              </button>
                            </Link>
                          </div>

                          <div className="col-lg-6 offset-1">
                            <div className="library-person">
                              <div className="row">
                                <div className="col-9">
                                  <h3>{element.product_name}</h3>
                                  <h5>{element.description}</h5>
                                  <h5>{element.details}</h5>
                                  <div className="service-heading d-inline-flex">
                                    <h5 className="ml-1 bg-light text-dark rounded-bottom rounded-top border p-1">
                                      Vegetarian
                                    </h5>
                                    <h5 className="ml-2 bg-light text-dark rounded-bottom rounded-top border p-1">
                                      Gluten Free
                                    </h5>
                                  </div>
                                  <div className="mb-3">
                                    <i className="fa fa-inr"></i>&nbsp;
                                    <span style={{ fontSize: "20px" }}>{element.mrp}</span>
                                  </div>
                                  {/* <h3 className="text-dark">Quantity:</h3>
                                  <div className="d-inline-flex">
                                    <div
                                      className="bg-light rounded-bottom rounded-top border h-25 p-1"
                                      onClick={Minus}
                                    >
                                      <i className="fa fa-minus"></i>
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
                                  </div> */}
                                </div>
                              </div>
                              {/* <p>{responseData?.[0]?.para}</p> */}
                              {/* <p>
                              <ReadMoreReact
                                text={responseData?.[0]?.more}
                                min={20}
                                ideal={30}
                                max={70}
                                readMoreText="View More"
                              />
                            </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
