import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = (props) => {
    const recipientEmail = 'smartdeveloper1002@gmail.com';
    // const subject = 'Subject of the Email';
    // const body = 'Body of the Email';
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [bot, setBot] = useState(false);
    // toast.configure();
  
    const handleClick = () => {
      if (subject != "" && body != "" && email != "" && name!= "") {
        if(bot == true) {
          const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + email + name)}`;
          window.location.href = mailtoLink;
        }
        else {
          // toast.warning("Check you are a bot", {position: toast.POSITION.TOP_RIGHT})
          toast.warn("Please, check you are a bot!");
        
        }
      }
    };
    return (
      
        <div>
          <main id="main">
          <ToastContainer />

          <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(img/breadcrumbs-bg.jpg)'}}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

              <h2>Contact</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Contact</li>
              </ol>

            </div>
          </div>

          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up" data-aos-delay="100">

              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-map"></i>
                    <h3>Location</h3>
                    <p>Woodside Park Underground Station (Northern Line), London N12 8SE</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-robot"></i>
                    <div style={{display: 'flex', marginTop: '30px', alignItems:'center'}}> 
                      <input type="checkbox" style={{height: '40px', width: '40px', marginRight: '40px'}} checked={bot} onChange={() => {setBot(!bot)}}/>
                      <p style={{fontSize: '20px'}}>I am not a bot</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gy-4 mt-1">

                <div className="col-lg-6 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-0.1879139!3d51.6180026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67484a8f7e05b56c!2sWoodside+Park!5e0!3m2!1sen!2sen!4v1639943755621"
                    frameBorder="0" style={{border:0, width: '100%', height: '384px'}} allowFullScreen></iframe>
                </div>

                <div className="col-lg-6">
                  <form action="#" className="php-email-form">
                    <div className="row gy-4">
                      <div className="col-lg-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required onChange={(e) => {setName(e.target.value)}}/>
                      </div>
                      <div className="col-lg-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required onChange={(e) => {setEmail(e.target.value)}} />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={(e) => {setSubject(e.target.value)}} />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" placeholder="Message" required onChange={(e) => {setBody(e.target.value)}}></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                  </form>
                    <div className="text-center"><button onClick={handleClick}>Send Message</button></div>
                    
                </div>

              </div>

            </div>
          </section>

          </main>
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>

            <div id="preloader"></div>
        </div>
    );
};
