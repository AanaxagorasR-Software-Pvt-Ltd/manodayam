import React from "react";
import { Link } from "react-router-dom";
export default function Research() {
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
                    <Link to="/">Home / &nbsp;</Link>
                  </li>
                  <li>Research</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="research-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="research-content">
                <h3>Research</h3>

                <div className="research-content-detail">
                  <h4>Mental health and AI</h4>
                  <p>
                    Mental health and Artificial Intelligence project with
                    minimum 10,000 samples. It is based on building a model from
                    Voice, Video, NLP,Genetics and Brain Mapping. The solution
                    is going to be first of its kind in India and provide
                    disruptive platform for providing continual mental health
                    assessment.
                  </p>
                </div>
                <div className="research-content-detail">
                  <h4>Mental Health and its effect on Comorbidity</h4>
                  <p>
                    The study is designed to see effect of mental health on
                    other comorbid conditions such as
                    Oncology,Cardiovascular,Pain Management and Neurological
                    science
                  </p>
                </div>
                <div className="research-content-banner"></div>
                <div className="research-content-detail">
                  <h4>Mental Health and Criminology</h4>
                  <p>
                    Manodayam with the help of its partners is working in Tihar
                    prison since last one year and addressing the psychological
                    needs and problems of the inmates. We have observed from our
                    interventions in Tihar Prison that inmates require a
                    continued and sustainable psychological first aid services
                    to cope up with aggression, remorse and guilt anxiety,
                    depression and other negative emotions and psychoactive
                    substance use. Majority of these issues can be handled by
                    basic counseling, psychotherapy, teaching stress management
                    and relaxation techniques. Further it is also observed that
                    few inmates need proper assessment of psychopathology and
                    referral services for treatment of acute cases of anxiety
                    depression and poor impulse control. This will help in
                    reducing the incidence and prevalence of violence,
                    interpersonal relationship issues among inmates and create
                    an enabling environment for improving quality of life and
                    reduction in the chances of repeating the offences. These
                    interventions have also been found helpful in improving the
                    inmates and correctional staff relationship. Hence, we have
                    decided to develop an application for facilitators and field
                    workers of Psychological First Aid to make the model
                    sustainable and replicable. It' will be an innovative new
                    approach to mental health care in prisons where in modal of
                    assessment of psychological problems and intervention will
                    be developed.
                  </p>
                </div>
                <div className="research-content-detail">
                  <h4>Mental Health and Spirituality</h4>
                  <p>
                    Manodayam’s partners has initiated SATYAM a DST funded
                    project which was initiated based upon our clear
                    understanding that the modern medicine alone can’t be
                    sufficient enough for the treatment and/or remission of
                    illnesses. Therefore, the alternative options of treatment
                    from the treasure of our ancient methods may turn out to be
                    highly effective in both the ways, financially and
                    clinically. This research will be a landmark study as it is
                    a specifically designed and customized Yoga program which
                    would cater to the specific needs of the illnesses. This
                    method will be useful to prevent relapse of depressive
                    disorders in patients. It may also lead to reduction in the
                    doses of antidepressant medication, reducing the cost &
                    duration of the treatment and side effects of the
                    medication. Therefore, it can be effectively used as an
                    adjunct to pharmacotherapy or as an alternative treatment
                    for mild to moderate depressive disorder. Globally, the
                    population is aging rapidly. According to WHO, the portion
                    of the World’s population over 60 years will nearly double
                    from 12-22%. Moreover, more than 20% of the adults aged 60
                    and above, suffer from mental disorders, excluding headache
                    disorder. In view of this we collaborated with Helpage
                    India, a leading charity platform in India working for
                    disadvantaged elderly for more than four decades, to provide
                    expert psychiatric services initially at The Earth Saviours
                    Foundation, Bhandhawari Village, Near Teri Golf Course,
                    Gurugram, Haryana.
                  </p>
                </div>
                <div className="research-content-detail">
                  <h4>Cow assisted Psychotherapy</h4>
                  <p>
                    Manodayam has initiated a projects with Gaushala Trust named
                    “Ma Kamdhenu VatsalyaSewa Dham”. This is the one of the
                    biggest and active Gaushalas of Kumaon Distt.
                    ChampawatUttrakhand, The Mental health and its effects of
                    cows in basic mental health conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
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
