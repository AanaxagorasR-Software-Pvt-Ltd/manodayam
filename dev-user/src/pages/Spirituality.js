import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import globalData from "../utill/rdx";
import { useNavigate } from "react-router-dom";
import { API_ADMIN_URL, SHAKTHI_QUESTION_API } from "../utill/api.endpoints";
export default function Spirituality() {
  const [responseData, setResponseData] = useState([]);

  const [count, setCount] = useState(0);
  let hist = useNavigate();

  // ShakthiQuestionlist
  const ShakthiQuestion = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_QUESTION_API}`);
    const ShakthiQuestning = {
      collectiontypedata: "shakthi_question",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_QUESTION_API}`, ShakthiQuestning)
      .then((res) => {
        setResponseData(res.data.data);

        console.log("====pppppp====", res.data.data);
        // {
        //   window.localStorage.getItem("Token");
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ShakthiQuestion();
  }, []);
  let element = responseData[count] || {};
  const incrementNextQuestion = ()=>{
    if (count == responseData.length -1){
      
      window.location.replace("http://localhost:3002/shakthi-ott/body");
    } else {
      setCount(count + 1)
      // hist(shakthi-ott/body)
    }
    
  } 
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Self Assessment</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Self Assessment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section mb-50">
        <div className="container">
          {
            <div className="row">
              <div className="col-lg-12">
                <div className="service-heading">
                  <h5>Self Assessment</h5>
                  <p>{element.ques}</p>
                </div>
              </div>
              <div className="col-lg-6 offset-3">
                <div className="video-question">
                  <ul>
                    <li>
                      <button className="btn spr-btn">{element.ans1}</button>
                    </li>
                    <li>
                      <button className="btn spr-btn">{element.ans2}</button>
                    </li>
                    <li>
                      <button className="btn spr-btn">{element.ans3}</button>
                    </li>
                    <li>
                      <button className="btn spr-btn">{element.ans4}</button>
                    </li>
                  </ul>
                  <button className="ctn-btn btn btn-web cnt-btn hvr-float-shadow" onClick={() => incrementNextQuestion()}>
                  Continue 

                    {/* <a href="https://swarnratnaindia.com/shakthi-ott/"> */}
                    {/* Continue &nbsp; */}
                    {/* </a> */}
                    {/* {globalData.ottLink} */}
                  </button>
                  <form>

                  </form>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <a href="#howwedo">
        <div
          data-placement="top"
          tabindex="0"
          data-toggle="tooltip"
          title="Previous page"
          className="bd-dark"
        >
          <li className="scrollToTop fa fa-chevron-left backbtn"></li>
        </div>
      </a>
    </>
  );
}
