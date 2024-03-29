// rcep -> to get below code for reactClassExportComponentWithPropTypes

//import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom"; //Since we are only using Link here, we are just importing that

//changedNavBar class into arrow function with same name,also since I am not using any props in NavBar, therefore I don't have to pass props as an argument here, removed render()
const NavBar = () => {
  //static propTypes = {};

  return (
    <div>
      {/* Copy the navbar code using Bootstrap below*/}
      {/* Then replace all class= to className= , Also look for closing tags where its not already present like hr and input in this case*/}
      {/* We have added bootstrap class fixed-top to make navbar sticky */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          TidBits Daily
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  Technology
                </Link>
              </li>
              {/* Note: We have replaced all the a tag with Link and href with to, because if we use a instead of Link it will reload the page every single time. */}
              {/* <li className="nav-item">
          <a className="nav-link active" href="/about">About</a>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
