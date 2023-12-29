import { Image } from "./image";
import React from "react";

export const Relation = (props) => {
  return (
    <main id="main">

      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(https://daminigrover.com/wp-content/uploads/2022/04/Damini-Couple-Counselling.jpg)'}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

          <h2>Relationship Coaching</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li>Relationship Coaching</li>
          </ol>

        </div>
      </div>

      
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-4">
              

              <h4>Relationship Coaching</h4>
              <p>Problems within a couple relationship can cause deep and profound damage to both parties, to children and to the wider family and social network. Relationship coaching works best when both people can attend sessions together. 
                At Thought-Bubble, whatever the problem might be, we will work with you in a non-judgemental way. 
                We focus on trying to help couples develop a constructive dialogue with each other, to gain an understanding of themselves and each other both as individuals and as part of a couple. And we make no presumptions about couples staying together or separating, so whatever the future holds for the relationship, helping both parties to work through difficulties constructively is our goal.</p>
                <p><ul><li><i className="bi bi-check-circle"></i>4-session pack with email support</li></ul></p>
            </div>

            <div className="col-lg-8">
              <img src="../img/relation.png" alt="" className="img-fluid services-img"/>
              <h3>Couples Counselling and Couples Coaching</h3>
              <p>
              Problems within a couple relationship can cause deep and profound damage to both parties, to children and to the wider family and social network.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>In person: £375</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Online: £295</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Reductions: from £100</span></li>
              </ul>
              <p>
              While some people come for one-to-one sessions to deal with relationship problems, it is almost always preferable if both people in a couple can attend sessions together to work out a way forward.
              </p>
              <p>
              At Thought-Bubble, whatever the problem might be, we will work with you. We focus on trying to help couples develop a constructive dialogue with each other, to gain an understanding of themselves and each other both as individuals and as part of a couple. We make no presumptions about either keeping a couple together or breaking it up.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
