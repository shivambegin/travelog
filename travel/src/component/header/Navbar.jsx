import React from "react";

const Navbar = () => {
  return (
    <nav className="Nav">
      <h1 className="Logo">Journify</h1>
      <div className="NavLinks">
        <a href="/">Home</a>
        <a href="/hotels">Hotels</a>
        <a href="/things-to-do">Things To Do</a>
        <a href="/restaurants">Restaurants</a>
        <a href="/flights">Flights</a>
        <a href="/holidays">Holidays</a>
      </div>
      <div className="RightLinks">
        <span>INR</span>
        <button>Sign In</button>
      </div>
    </nav>
  );
};
export default Navbar