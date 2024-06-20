import React from 'react';
// eslint-disable-next-line import/no-absolute-path
import content1 from '/content1.png';

import Navbar from '../components/LandingPage/Navbar';
import Team from '../components/LandingPage/Team';
import Footer from '../components/LandingPage/Footer';
import Layanan from '../components/LandingPage/Layanan';
import Artikel from '../components/LandingPage/Artikel';

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <h1>Selamat Datang di Reich Wise</h1>
            <br />
            <p>
              Selamat Datang di Reich Wise, Teman Setia Anda dalam Mengelola dan
              Meningkatkan Kesehatan Keuangan!
            </p>
            <br />
            <p>
              Di dunia yang terus berubah ini, menjaga kesehatan keuangan menjadi
              hal yang tak terpisahkan dari kesejahteraan kita. Namun, memantau
              dan mengelola keuangan seringkali menjadi tugas yang menantang dan
              membingungkan. Itulah sebabnya kami hadir: untuk membantu Anda menyusun
              rencanakeuangan yang solid dan mencapai tujuan keuangan Anda
              dengan lebih mudah dan lebih efisien.
            </p>
            <span>
              <a href="/master" className="btn btn-primary margin">Cek Keuanganmu!</a>
              <a href="#" className="btn btn-secondary margin">Learn More!</a>
            </span>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12">
            <img src={content1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <Layanan />
      <Artikel />
      <Team />
      <Footer />
    </>
  );
}

export default LandingPage;