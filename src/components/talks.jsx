import React from "react";

export const Talks = (props) => {
  return (
    <main id="main">

      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(https://media-nightinn.s3.us-east-1.amazonaws.com/media/0x0.jpeg)'}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

          <h2>Talks and Team Building Workshops</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li>Talks and Team Building Workshops</li>
          </ol>

        </div>
      </div>

      
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-4">
              

              <h4>Talks and Team Building Workshops</h4>
              <p>
              Sometimes, the world seems to be a chaotic mess full of injustice, cruelty and absurdity. Society and politics can be bewildering and a cause of sadness, distress, frustration and anger. At Thought-Bubble, we help people make sense of it all through workshops, discussions and talks on specific topics.
              We also run sessions for teams to help team members understand each other and work together better.
              </p>
              <p>
                  <ul>
                      <li><i className="bi bi-check-circle"></i>Conversations on Race, Ethnicity and Culture</li>
                      <li><i className="bi bi-check-circle"></i>Language: Accents, Dialects, Status and Stigma</li>
                      <li><i className="bi bi-check-circle"></i>Inter-Cultural Communication Workshop</li>
                  </ul>
                </p>
            </div>

            <div className="col-lg-8">
              <img src="https://www.grace-counseling.com/wp-content/uploads/2023/02/5-Group-Therapy-Activities.jpeg" alt="" className="img-fluid services-img"/>
              <h3>Life Coaching</h3>
              <p>
              We work one-to-one with individuals for life coaching work, as well as with couples for relationship coaching. Our aim is to help people make the most out of their lives.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>In person: £25</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Online: £10</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Reductions: from £5</span></li>
              </ul>
              <p>
              About Coaching: coaching is geared towards exploring all your possibilities, making the most out of them and maximising your potential. We encourage a fresh perspective on your life to break routines which are no longer helpful or necessary. The goals in life coaching work may be very focused or more exploratory depending on the needs of the client. Coaching is very flexible and we continuously review and re-evaluate in collaboration with you.
              </p>
              <p>
              At Thought-Bubble we have a range of approaches to suit your needs, including: Cognitive Behavioural Coaching, Existential Coaching, NLP Coaching, Gestalt Coaching and Agile Coaching.
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
