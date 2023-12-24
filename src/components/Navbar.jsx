import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <div>
    <h1>
      Shopping Cart
    </h1>
    <ul>
      <li><NavLink to=""/>Home</li>
      <li><NavLink to=""/>New Product</li>
      <li><NavLink to=""/>Product List</li>
      <li><NavLink to=""/>About</li>
    </ul>
   </div>
  );
}

export default Navbar