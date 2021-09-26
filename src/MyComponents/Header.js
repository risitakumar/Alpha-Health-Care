import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  const mystyle = {
    backgroundColor: "#fffdfa",
    color: "rgba(12, 88, 46, 0.8)",
    fontFamily: "Garamond, serif",
    fontWeight: "900",
    fontSize: "45px",
    position: "relative",
  };
  const style = {
    backgroundColor: "#fffdfa",
    color: "rgba(12, 88, 46, 0.8)",
    fontFamily: "Garamond, serif",
    fontSize: "20px",
    position: "relative",
    padding: "50px",
  };
  return (
    <>
      <ul>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={mystyle}>Alpha Health Care</h2>
          <li>
            <Link to="/" style={style}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" style={style}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/login" style={style}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/login" style={style}>
              Departments
            </Link>
          </li>
          <li>
            <Link to="/login" style={style}>
              About Us
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}
