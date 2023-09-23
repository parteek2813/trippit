import React from "react";
import "./Header.css";

export function Header() {
  return (
    <>
      <img
        className="image"
        alt="Image"
        src="https://c.animaapp.com/SHnkkd1L/img/image-3@2x.png"
      />
      <div className="container">
        <div className="group-4">
          <a href="#" className="text-wrapper">
            About Us
          </a>
          <a href="#" className="text-wrapper-2 ">
            Products
          </a>
          <a href="#" className="text-wrapper-3">
            Services
          </a>
          <a href="#" className="text-wrapper-4">
            Blog
          </a>
          <a href="#" className="text-wrapper-5">
            Contact
          </a>
        </div>
        <div className="overlap-group-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-6">Login</div>
          </div>
        </div>
      </div>
    </>
  );
}
