import React from 'react';
// import Header from '../assets/component/Header';
// import Popularone from '../assets/component/Popularone';
// import Ordernow from '../assets/component/Ordernow';
// import Slider from '../assets/component/Slider';
// import ReservationForm from '../assets/component/ReservationForm';
// import Footer from '../assets/component/Footer';
import Header from '../component/Header';
import Popularone from '../component/Popularone';
import Ordernow from '../component/Ordernow';
import Slider from '../component/Slider';
import ReservationForm from '../component/ReservationForm'
import Footer from '../component/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Popularone />
      <Ordernow />
      <Slider />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default Home;
