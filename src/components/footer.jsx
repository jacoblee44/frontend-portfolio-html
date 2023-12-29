import React from "react";

export const Footer = (props) => {
  return (
    <footer id="footer" className="footer">

        <div className="footer-content position-relative">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6">
                        <div className="footer-info">
                            <h3>Thought Bubble</h3>
                            <p>
                            Woodside Park Underground Station (Northern Line) <br/>
                            London N12 8SE<br/><br/>
                                {/* <strong>Phone:</strong> +1 5589 55488 55<br/>
                                <strong>Email:</strong> info@example.com<br/> */}
                            </p>
                            {/* <div className="social-links d-flex mt-3">
                                <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-youtube"></i></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-legal text-center position-relative">
        <div className="container">
            <div className="copyright">
            &copy; 2010-2023 <strong><span>Haran Rasalingam</span></strong> | All Rights Reserved
            </div>
            <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Oleksandr</a> Distributed by <a
                href="https://themewagon.com">Oleksandr</a>
            </div>
        </div>
        </div>

    </footer>
  );
};
