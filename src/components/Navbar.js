import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-danger text-center ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                className="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
