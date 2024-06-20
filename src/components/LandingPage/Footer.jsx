import React from 'react';

function Footer() {
  return (
    <>
      <hr />
      <div className="row footer align-items-center">
        <div className="col text-center">
          <h4>
            Dengan Reich Wise, Anda memiliki akses ke berbagai fitur yang
            dirancang khusus untuk mempermudah pengelolaan keuangan Anda
          </h4>
          <br />
          <form className="d-flex">
            <input type="email" className="form-control me-2" placeholder="Email" aria-label="Email" />
            <button className="btn btn-outline-secondary" type="submit">Subscribe</button>
          </form>
          <br />
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <p>
          Copyright &reg; 2024 - ReichWise rights
        </p>
      </div>
    </>
  );
}
export default Footer;