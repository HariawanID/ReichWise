import React from 'react';
import logo from '/logo.png';

function Navbar() {
  return (
    <section className="navbar">
      <div className="container align-items-center">
        <div className="row align-items-center">
          <div className="col-8">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>
        </div>
      
        </div>
    </section>
  );
}
export default Navbar;