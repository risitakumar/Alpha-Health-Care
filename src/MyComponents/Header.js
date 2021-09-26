import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            <BrowserRouter>
              <Link className="navbar-brand" to="/home">
                Alpha Health
              </Link>
            </BrowserRouter>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  active">
                  <BrowserRouter>
                    <Link className="nav-to= " aria-current="page" to="/home">
                      Home
                    </Link>
                  </BrowserRouter>
                </li>
                <li className="nav-item dropdown ">
                  <BrowserRouter>
                    <Link
                      className="nav-to= dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                  </BrowserRouter>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <BrowserRouter>
                        <Link className="dropdown-item" to="./">
                          Child Care
                        </Link>
                      </BrowserRouter>
                    </li>
                    <li>
                      <BrowserRouter>
                        <Link className="dropdown-item" to="./">
                          Maternity{" "}
                        </Link>
                      </BrowserRouter>
                    </li>
                    <li>
                      <BrowserRouter>
                        <Link className="dropdown-item" to="./">
                          General Physician
                        </Link>
                      </BrowserRouter>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <BrowserRouter>
                    <Link
                      className="nav-to= dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Departments
                    </Link>
                  </BrowserRouter>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <BrowserRouter>
                        <Link className="dropdown-item" to="/">
                          Child Care
                        </Link>
                      </BrowserRouter>
                    </li>
                    <li>
                      <BrowserRouter>
                        <Link className="dropdown-item" to="/">
                          Maternity
                        </Link>
                      </BrowserRouter>
                    </li>
                    <li>
                      <BrowserRouter>
                        <Link className="dropdown-item" to="/">
                          General Ward
                        </Link>
                      </BrowserRouter>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <BrowserRouter>
                    <Link
                      className="nav-to= "
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                  </BrowserRouter>
                </li>
                <li className="nav-item ">
                  <BrowserRouter>
                    <Link className="nav-to=" to="/">
                      Contact Us
                    </Link>
                  </BrowserRouter>
                </li>
                <li className="nav-item ">
                  <BrowserRouter>
                    <Link className="nav-to=" to="/registrationform">
                      Log In
                    </Link>
                  </BrowserRouter>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
