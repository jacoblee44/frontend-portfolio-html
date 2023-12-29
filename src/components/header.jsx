import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center">
          <img src="img/thought_bubble_logo.gif" alt="" />
        </a>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="/home" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li className="dropdown"><a href="#"><span>Services</span> 
            <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="/personal-and-professional-growth">Personal and professional growth</a></li>
                <li><a href="/relationship-coaching">Relationship Coaching</a></li>
                <li><a href="/tough-times">Tough Times</a></li>
                <li><a href="/talks-and-team-building-workshops">Talks and Team Building Workshops</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};
