import React from "react";
import { Link } from "react-router-dom";
export default function Anxiety() {
  return (
    <>
      <div className="contact-banner mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-breadcrumb">
                <h3>Anxiety</h3>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home / &nbsp;</Link>
                  </li>
                  <li>Anxiety</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="health-heal-content mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="research-content">
                <h3>Anxiety</h3>

                <div className="research-content-detail">
                  <h4>What is Anxiety?</h4>
                  <p>
                    Anxiety is a <b>feeling of fear, dread, and uneasiness</b>.
                    It might cause you to sweat, feel restless and tense, and
                    have a rapid heartbeat. It can be a normal reaction to
                    stress. For example, you might feel anxious when faced with
                    a difficult problem at work, before taking a test, or before
                    making an important decision.
                  </p>
                </div>
                <div className="research-content-detail">
                  <h4>Whats causes anxiety?</h4>
                  <p>
                    Central nervous system Long-term anxiety and panic attacks
                    can cause your brain to release stress hormones on a regular
                    basis. This can increase the frequency of symptoms such as
                    headaches, dizziness, and depression.
                  </p>
                </div>
                <div className="research-content-detail">
                  <h4>How do I stop my anxiety?</h4>
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i> Take a time-out
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i> Eat well-balanced
                      meals.{" "}
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i> Limit alcohol and
                      caffeine, which can aggravate anxiety and trigger panic
                      attacks.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i> Get enough sleep. .
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i> Exercise daily to
                      help you feel good and maintain your health.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i> Take deep breaths.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i> Do your best.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
