import React from "react";

export const Personal = (props) => {
  return (
    <main id="main">

      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1143678440/photo/personal-growth-concept.jpg?s=612x612&w=0&k=20&c=93yxlOtOZWPUPRFardh7fAPaY-u0xZf9q0jjEaO0-To=)'}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

          <h2>Personal and professional growth</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li>Personal and professional growth</li>
          </ol>

        </div>
      </div>

      
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-4">
              

              <h4>Personal and professional growth</h4>
              <p>There are many skills and techniques needed in our lives which often don't get taught. Some people have those skills naturally or were lucky enough to have people in their life to show them. But for many of us, this never happened. 
              At Thought-Bubble, we can help you develop and grow valuable life skills to benefit you both personally and professionally. This ranges from learning more about yourself and your values to help you with making key decisions in your life, boosting you self-confidence, to becoming and excellent communicator able to get your ideas across in a compelling way. 
              We can coach you in techniques to facilitate your learning and to enhance your creative process to help you generate exciting new ideas.</p>
              <p>
                  <ul>
                      <li><i className="bi bi-check-circle"></i>Powerful Communication</li>
                      <li><i className="bi bi-check-circle"></i>Excellent Presentations</li>
                      <li><i className="bi bi-check-circle"></i>Learning another Language</li>
                      <li><i className="bi bi-check-circle"></i>Coaching 101</li>
                      <li><i className="bi bi-check-circle"></i>Negotiation</li>
                  </ul>
                </p>
            </div>

            <div className="col-lg-8">
              <img src="https://media.istockphoto.com/id/1289433140/photo/elementary-student-talks-with-teacher-during-virtual-tutoring-session.jpg?s=612x612&w=0&k=20&c=GTvT4NRn8vM5bv1_aFdUOYnxLUIR6Yz2oKLMgST7YpU=" alt="" className="img-fluid services-img"/>
              <h3>One-to-One</h3>
              <p>
              One-to-one work really gives you a chance to focus on yourself away from the pressures of family and work. 
              At Thought-Bubble you will have the space and time to explore safely and confidentially any and all aspects of your life, past, present and future.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>In person: £85</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Online: £65</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Reductions: from £25</span></li>
              </ul>
              <p>
              We work with you to find a way forward which suits you and will tailor our approach accordingly.
              </p>
              <p>
              Face-to-face is the traditional way to work with clients and we offer this in Finchley.

              Online work is becoming increasingly popular using Skype, Internet Messaging (IM) and e-mail. This means of working provides greater flexibility for those who find it difficult to get to a session in person.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
