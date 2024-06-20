import React from 'react';
import content2 from '/content2.png';
import content3 from '/content3.png';

function Layanan() {
  return (
    <>
      <div className="bg-1">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              {/* <img src={wave1} alt="Wave" data-index="1" className="img-fluid" /> */}
              <div className="row">
                <div className="col">
                  <br />
                  <br />
                  <br />
                  <h2>Layanan Kami</h2>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-4 col-sm-12">
                  <img src={content2} alt="Wave" className="" />
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <img src={content3} alt="Wave" className="" />
                      <h4>Keep Tracking</h4>
                      <br />
                      <br />
                      <p>
                        Lakukan Pencatatan Terhadap pemasukan dan pengeluaranmu!
                      </p>
                      <br />
                      <br />
                      <a href="" className="btn btn-primary">Mulai Tracking</a>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <img src={content3} alt="Wave"/>
                      <h4>Cek Keuangan</h4>
                      <br />
                      <p>
                        Cek kesehatan keuangan akan membantu anda untuk mengetahui
                        tingkat kesehatan keuangan anda
                      </p>
                      <br />
                      <br />
                      <a href="" className="btn btn-primary">Mulai Tes</a>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Layanan;