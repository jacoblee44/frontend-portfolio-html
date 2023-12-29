import React from "react";

export const Home = (props) => {
    
    return (
        <div>

            <main id="main">
                <section className="hero-wrapper even-taller-mobile home-illus-cta-btn-hero-wrapper">
                    <div className="hero">
                        <div className="container">
                            <h1 data-testid="headline" className="heading-xl txt-ondark">Welcome to Thought-Bubble</h1>
                            <fieldset>
                                <legend className="cta-question-legend" tabIndex="0" data-question="What type of therapy are you looking for?">
                                    <div data-testid="bh-homepage-cta-question" className="cta-question body-lg">Coaching and Therapy for growth, wellbeing and embracing your diversity</div>
                                </legend>
                                <div className="home-illus-button-group">
                                    <a data-testid="btn-start-individual" id="btn-start-individual" className="home-illus-cta-btn individual" href="#">
                                        <div data-testid="individual" className="home-illus-cta-btn-main-text text-width">Personal and professional growth </div>
                                        {/* <div data-testid="individual-subtext" className="home-illus-cta-btn-help-text">For myself
                                            <span className="arrow-outer">
                                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div> */}
                                    </a>
                                    <a data-testid="btn-start-couples" id="btn-start-couples" className="home-illus-cta-btn couples" href="#">
                                        <div data-testid="couples" className="home-illus-cta-btn-main-text">Relationship Coaching </div>
                                        {/* <div data-testid="couples-subtext" className="home-illus-cta-btn-help-text">For me and my partner
                                            <span className="arrow-outer">
                                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div> */}
                                    </a>
                                    <a data-testid="btn-start-teen" id="btn-start-teen" className="home-illus-cta-btn teen" href="#">
                                        <div data-testid="teen" className="home-illus-cta-btn-main-text">Tough times </div>
                                        {/* <div data-testid="teen-subtext" className="home-illus-cta-btn-help-text">For life coaching
                                            <span className="arrow-outer">
                                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div> */}
                                    </a>
                                    <a data-testid="btn-start-teen" id="btn-start-teen" className="home-illus-cta-btn1 teen" href="#">
                                        <div data-testid="teen" className="home-illus-cta-btn-main-text text-width">Talks and Team Building Workshops </div>
                                        {/* <div data-testid="teen-subtext" className="home-illus-cta-btn-help-text">For life coaching
                                            <span className="arrow-outer">
                                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div> */}
                                    </a>
                                </div>
                            </fieldset>
                        </div>
                        <div className="down-arrow" role="button" aria-label="scroll" tabIndex="0">
                            <a href="#get-started">

                            <img data-src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/icons/chevron-down.svg?v=ac92163dd881" loading="eager" className="lozad down-arrow-img" alt="" src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/icons/chevron-down.svg?v=ac92163dd881" data-loaded="true" />
                            </a>
                        </div>
                    </div>
                </section>

                <section id="get-started" className="get-started section-bg">
                <div className="container">

                    <div className="row justify-content-between gy-4">

                    <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                        <div className="content">
                        <h3>Thought-Bubble offers coaching, counselling and psychotherapy for individuals and couples to help you:</h3>
                        <ul>
                            <li>design your unique path which fits with your values</li>
                            <li>personally and professionally, socially and psychologically</li>
                            <li>get the best out of your life</li>
                            <li>grow in terms of your personal development</li>
                            <li>tackle obstacles along the way</li>
                        </ul>
                        <p>Life is always full of ups and downs. Thought-Bubble encourages a courageous but down-to-earth perspective to achieve fulfilment in a complex world.</p>
                        </div>
                    </div>

                        <img className="card-bg" src="/img/Haran-Rasalingam-01.jpg" style={{ width: '400px', backgroundRepeat: 'no-repeat', borderRadius: '25px 150px 150px'}} />

                    </div>

                </div>
                </section>
                <div className="curved-down"></div>

                <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                    <h2>Services</h2>
                    {/* <p>We provide several services. You will get good results.</p> */}
                    </div>

                    <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" style={{backgroundColor: '#f5f6f7'}}>
                        <div className="service-item  position-relative">
                        <div className="icon">
                            <i className="fa-solid fa-people-arrows"></i>
                        </div>
                        <h3>Personal and professional growth</h3>
                        <p>There are many skills and techniques needed in our lives which often don't get taught. Some people have those skills naturally or were lucky enough to have...</p>
                        {/* <a href="service-details.html" className="readmore stretched-link">Learn more <i
                            className="bi bi-arrow-right"></i></a> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                        <div className="icon">
                            <i className="fa-solid fa-users-line"></i>
                        </div>
                        <h3>Relationship Coaching</h3>
                        <p>Problems within a couple relationship can cause deep and profound damage to both parties, to children and to the wider family and social network...</p>
                        {/* <a href="service-details.html" className="readmore stretched-link">Learn more <i
                            className="bi bi-arrow-right"></i></a> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                        <div className="icon">
                            <i className="fa-solid fa-person-chalkboard"></i>
                        </div>
                        <h3>Tough times</h3>
                        <p>Life can take its toll on mental health and wellbeing. Some issues can be sudden or intermittent, others long-term. Some may be caused by a sudden crisis, ...</p>
                        {/* <a href="service-details.html" className="readmore stretched-link">Learn more <i
                            className="bi bi-arrow-right"></i></a> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                        <div className="icon">
                            <i className="fa-solid fa-person-dots-from-line"></i>
                        </div>
                        <h3>Talks and Team Building Workshops</h3>
                        <p>Sometimes, the world seems to be a chaotic mess full of injustice, cruelty and absurdity. Society and politics can be bewildering and a cause of sadness, distress, ...</p>
                        {/* <a href="service-details.html" className="readmore stretched-link">Learn more <i
                            className="bi bi-arrow-right"></i></a> */}
                        </div>
                    </div>


                    </div>

                </div>
                </section>

                <section id="alt-services" className="alt-services alt-services-cur" style={{backgroundColor: '#f5f6f7'}}>
                    <div className="container" data-aos="fade-up">

                    <table className="mainTable" summary="This table details the services offered by Thought Bubble">
                        <caption>
                            SERVICES
                        </caption>
                        <tbody><tr>
                            <th className="duration" scope="col">&nbsp;</th>
                            <th className="shortlong" scope="col">In person</th>
                            <th className="shortlong" scope="col">Online</th>
                            <th className="shortlong" scope="col">Reductions</th>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">Consultation</th>
                            <td>FREE</td>
                            <td>FREE</td>
                            <td>FREE</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">General explorative session</th>
                            <td>£85</td>
                            <td>£65</td>
                            <td>from £25</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">
                                Goal-oriented (4-session pack)
                                <ul>
                                    <li>Self-Confidence</li>
                                    <li>Identity</li>
                                    <li>Embracing your Diversity</li>
                                </ul>
                            </th>
                            <td>£300</td>
                            <td>£200</td>
                            <td>from £90</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">
                                Relationship Coaching
                                <ul>
                                    <li>4-session pack with email support</li>
                                </ul>
                            </th>
                            <td>£375</td>
                            <td>£295</td>
                            <td>from £100</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">
                                Skills
                                <ul>				
                                    <li>Powerful Communication</li>
                                    <li>Excellent Presentations</li>
                                    <li>Learning another Language</li>
                                    <li>Coaching 101</li>
                                    <li>Negotiation</li>
                                </ul>
                            </th>
                            <td>£85</td>
                            <td>£65</td>
                            <td>from £25</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">
                                Tough times (4-session pack)
                                <ul>
                                    <li>Depression</li>
                                    <li>Boredom/Loss of meaning</li>
                                    <li>Loss of job</li>
                                    <li>Anger</li>
                                    <li>Break-up</li>
                                    <li>Grief</li>
                                    <li>Anxiety</li>
                                    <li>Phobia</li>
                                    <li>Family dysfunction</li>
                                    <li>Victim of violence/abuse/discrimination/prejudice/bullying</li>
                                </ul>
                            </th>
                            <td>£300</td>
                            <td>£200</td>
                            <td>from £90</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">
                                Hypnotherapy
                                <ul>
                                    <li>Stop Smoking</li>
                                </ul>
                            </th>
                            <td>£250</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <th className="titles" scope="row">
                            Talks and Team Building Workshops
                                <ul>
                                    <li>Conversations on Race, Ethnicity and Culture</li>
                                    <li>Language: Accents, Dialects, Status and Stigma</li>
                                    <li>Inter-Cultural Communication Workshop</li>
                                </ul>
                            </th>
                            <td>£25</td>
                            <td>£10</td>
                            <td>£5</td>
                        </tr>
                        
                    </tbody></table>

                    </div>
                </section>


                

                <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                    <h2>Testimonials</h2>
                    <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia
                        reprehenderit sunt deleniti</p>
                    </div>

                    <div className="slides-2 swiper">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqeXXIlP6CMVaw0ECsk-j5QoZi2DXKbzaVwGiORcdS-Q3asyCVjRfyibRYGNzUAc3uUo&usqp=CAU" className="testimonial-img" alt="" />
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbnDt1ZLoQ5QUlXE27D75ra48IJ-V9bJ3BuuwLNG9l3vabYhL7zOIETg31JrlrUuBAKs&usqp=CAU" className="testimonial-img" alt="" />
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                                quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqeXXIlP6CMVaw0ECsk-j5QoZi2DXKbzaVwGiORcdS-Q3asyCVjRfyibRYGNzUAc3uUo&usqp=CAU" className="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                                tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbnDt1ZLoQ5QUlXE27D75ra48IJ-V9bJ3BuuwLNG9l3vabYhL7zOIETg31JrlrUuBAKs&usqp=CAU" className="testimonial-img" alt="" />
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                                minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbnDt1ZLoQ5QUlXE27D75ra48IJ-V9bJ3BuuwLNG9l3vabYhL7zOIETg31JrlrUuBAKs&usqp=CAU" className="testimonial-img" alt="" />
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                                culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                                quid.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
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
