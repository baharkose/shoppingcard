import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="d-flex gap-2 align-center justify-center pt-2"
      style={{ color: "white", background: "#768482", cursor: "pointer" }}
    >
      <h5>Shopping Cart</h5>
      <ul
        className="d-flex gap-3 align-center justify-center"
        style={{ listStyle: "none" }}
      >
        <li>
          <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "red" }} >
          Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="newproduct"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
          New Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="productlist"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
          Product List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
          About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
