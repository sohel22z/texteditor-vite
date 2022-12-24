import React from "react";
import PropTypes from 'prop-types';
// import iconOne from "../assets/img/instagram.png";
import iconTwo from "../assets/img/linkedin.png";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h5 className="navbar-brand my-1">{props.title}</h5>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                target="blank"
                href="https://www.linkedin.com/in/sohelansarii/"
              >
                <img src={iconTwo} width={24} height={24} alt="icon" />
              </a>
            </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 aria-current="page"
//                 target="blank"
//                 href="https://www.instagram.com/sohelansarii/"
//               >
//                 <img src={iconOne} width={24} height={24} alt="icon" />
//               </a>
//             </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// SET NAVBAR PROPTYPES
Navbar.propTypes = { title: PropTypes.string.isRequired };
