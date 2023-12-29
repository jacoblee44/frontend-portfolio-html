import React from "react";

export const Tough = (props) => {
  return (
    <main id="main">

      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(https://media.licdn.com/dms/image/D4D12AQEuKItWQQa8-Q/article-cover_image-shrink_720_1280/0/1670249032162?e=2147483647&v=beta&t=dsl8LnQHV_u_8VGDxurKAK7CcYzmFbLTcMSixLals8w)'}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

          <h2>Tough times</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li>Tough times</li>
          </ol>

        </div>
      </div>

      
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-4">
              

              <h4>Tough times</h4>
              <p>Life can take its toll on mental health and wellbeing. Some issues can be sudden or intermittent, others long-term. Some may be caused by a sudden crisis, others by childhood traumas, and some may be a complex mixture of things both internal and external, past and present.
              At Thought-Bubble, we offer a range of psychological and therapeutic interventions to help you whatever the issue, drawing on a range of approaches including: Cognitive Behavioural Therapy (CBT), Existential Therapy, NLP, Psychodynamic Counselling, Gestalt Therapy and Hypnotherapy.
              </p>
              <p>
                  <ul>
                      <li><i className="bi bi-check-circle"></i>Depression</li>
                      <li><i className="bi bi-check-circle"></i>Boredom/Loss of meaning</li>
                      <li><i className="bi bi-check-circle"></i>Loss of job</li>
                      <li><i className="bi bi-check-circle"></i>Anger</li>
                      <li><i className="bi bi-check-circle"></i>Break-up</li>
                      <li><i className="bi bi-check-circle"></i>Grief</li>
                      <li><i className="bi bi-check-circle"></i>Anxiety</li>
                      <li><i className="bi bi-check-circle"></i>Phobia</li>
                      <li><i className="bi bi-check-circle"></i>Family dysfunction</li>
                      <li><i className="bi bi-check-circle"></i>Victim of <br/>violence/abuse/discrimination/prejudice/bullying</li>
                  </ul>
                </p>
            </div>

            <div className="col-lg-8">
              <img src="https://media.istockphoto.com/id/502086505/photo/the-perfect-storm.jpg?s=612x612&w=0&k=20&c=7FEArukHeGgxLIx-oAD059cTUKOS2ghLGjTCvFibJrk=" alt="" className="img-fluid services-img"/>
              <h3>Counselling and Psychotherapy</h3>
              <p>
              We work one-to-one with individuals, as well as with couples and with groups to help people get to grips with difficulties and to make the most out of their lives.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>In person: £300</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Online: £200</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Reductions: from £90</span></li>
              </ul>
              <p>
              About Counselling: counselling tends to be focused on a single issue which is worked on with a set goal in mind for six sessions.
              </p>
              <p>
              About Psychotherapy: psychotherapy explores more than a single issue and will look at the interconnections between different aspects of your life. The goals may be more open-ended, but we will still start with six sessions and then review.
              </p>
              <p>
              At Thought-Bubble we have a range of approaches to suit your needs, including: Cognitive Behavioural Therapy (CBT), Existential Therapy, NLP, Psychodynamic Counselling, Gestalt Therapy and Hypnotherapy.
              </p>
              <p>
              All Thought-Bubble clients have an initial consultation session during which we work with you to decide on the appropriate course of action.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
