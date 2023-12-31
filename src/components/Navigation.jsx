import React from "react";
import {useState} from "react";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <div className="figure mt-3" style={{width: '12rem', height: '12rem'}}>
        <img src="me.jpg" alt="me" style={{width: '100%'}} className="rounded-circle"/>
      </div>
      <div style={{color: 'white'}}>
        <p>+48 794 698 119</p>
        <p>dmitrijkosow@gmail.com</p>
      </div>
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Dmitrij Kosow</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="img/profile.png"
            alt=""
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
     <span className="navbar-toggler-icon" />
      </button>
      <div 
      className={!mobileMenu && `collapse navbar-collapse`} id="navbarSupportedContent"
      >
        <ul 
        className="navbar-nav"
        onClick={() => setMobileMenu(false)}
        >
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">
              Awards
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}