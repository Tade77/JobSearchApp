import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="Footer ">
      <div className="Footer--1">
        <div className="msg1 leading-none">
          <img src="/FooterLogo.png" alt="jobs" />

          <aside>
            My Jobs Provide
            <br />
            real opportunities to
            <br />
            graduates and unemployed
            <br />
            individual to search and acquire
            <br />
            jobs in their carrier and areas
            <br />
            of interest
          </aside>
        </div>
        <article>
          <h1>Recruitment</h1>
          <Link to="/recruitment">
            <p>Become Affiliate</p>
          </Link>
          <Link to="/go unlimited">
            <p>Go Unlimited</p>
          </Link>
          <Link to="/services">
            <p>Services</p>
          </Link>
        </article>
        <article>
          <h1>Major Carriers</h1>
          <Link to="/bussiness stories">
            <p>Bussiness Stories</p>
          </Link>
          <Link to="/digital stores">
            <p>Digital Stores</p>
          </Link>
          <Link to="/learning">
            <p>Learning</p>
          </Link>
          <Link to="/social media">
            <p>Social Media</p>
          </Link>
        </article>
        <article>
          <h1>Most Recruiting Companies</h1>
          <Link to="/design systems">
            <p>Design Systems</p>
          </Link>
          <Link to="/themes&templates">
            <p>Themes & Templates</p>
          </Link>
          <Link to="mockup">
            <p>Mockups</p>
          </Link>
          <Link to="/presentation">
            <p>Presentations</p>
          </Link>
          <Link to="/wireframes">
            <p>Wireframes Kits</p>
          </Link>
          <Link to="/uikits">
            <p>UI Kits</p>
          </Link>
        </article>
        <article>
          <h1>Who got jobs here</h1>
          <Link to="/licence">
            <p>License</p>
          </Link>
          <Link to="/refundpolicy">
            <p>Refund Policy</p>
          </Link>
          <Link to="/about">
            <p>About us</p>
          </Link>
          <Link to="/contact">
            <p>Contacts</p>
          </Link>
          <div className="social_icons"></div>
        </article>
      </div>
      <hr />
      <div className="social_icons_copy ">
        <p className="copyright">Copyright &copy; 2020</p>
        <div className="social_icons_svgs ">
          <a href="#">
            <img src="/50px.svg" alt="icon" />
          </a>
          <a href="#">
            <img src="/50px-2.svg" alt="icon" />
          </a>
          <a href="#">
            <img src="/50px-1.svg" alt="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
