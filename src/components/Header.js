import React, { useState } from "react";
import logo from "../asssets/img/logo.png";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top bg-transparent"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <a href="index.html">
            <img src={logo} className="h-[70px]" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className=" gap-3 navbar-nav ms-auto ">
              <li className="">
                <a
                  className=" hover:text-[#118e8e]"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="">
                <a
                  className=" hover:text-[#118e8e]"
                  aria-current="page"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="">
                <a
                  className=" hover:text-[#118e8e]"
                  aria-current="page"
                  href="#mission"
                >
                  Mission
                </a>
              </li>
              <li className="">
                <a
                  className=" hover:text-[#118e8e] "
                  aria-current="page"
                  href="#vision"
                >
                  Vision
                </a>
              </li>
            </ul>
            <div className="d-flex ms-lg-4 mb-2">
              <button className="rounded-md bg-[#00062f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#118e8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Events
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
