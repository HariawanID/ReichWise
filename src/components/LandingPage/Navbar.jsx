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
        <div className="row align-items-center">
          <div className="col-12 d-flex justify-content-end">
            <a href="/" className='item-navbar mb-3'> Beranda </a>
            <a href="#about" className='item-navbar mb-3'> Tentang Kami </a>
            <a href="#contact" className='item-navbar mb-3'> Layanan </a>
            <a href="#contact" className='item-navbar mb-3'> Team </a>
            <a href="#contact" className='item-navbar mb-3'> Blog </a>
            <a href="/login" className='btn btn-light  mb-3'> Sign In </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Navbar;