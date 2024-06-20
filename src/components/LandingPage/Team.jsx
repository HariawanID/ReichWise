import React from 'react';
import team1 from '/team1.png';
import team2 from '/team2.jpg';
import team3 from '/team3.jpg';

function Team() {
  return (
    <>
      <hr />
      <div className="container">
        <div className="row text-center mb-3">
          <br />
          <br />
          <br />
          <h3>OUR TEAM</h3>
          <br />
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="card">
              <div className="card-body">
                <img src={team1} alt="Abdul Khakim" className="img-fluid team" />
                <br />
                <br />
                <h5>Abdul Khakim</h5>
              </div>

            </div>
          </div>
          <div className="col text-center">
            <div className="card">
              <div className="card-body">
                <img src={team2} alt="Abdul Khakim" className="img-fluid team" />
                <br />
                <br />
                <h5>Dafif Afin Annafi</h5>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <div className="card">
              <div className="card-body">
                <img src={team3} alt="Abdul Khakim" className="img-fluid team" />
                <br />
                <br />
                <h5>Hariawan Maulana</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Team;