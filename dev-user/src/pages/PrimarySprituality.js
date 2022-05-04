import React from "react";
import { Link } from "react-router-dom";
export default function PrimarySprituality() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>research</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Research</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="research-section mb-50">
     
      </div>
    </>
  );
}
