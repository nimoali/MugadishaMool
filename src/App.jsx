import React from 'react';
//import MugadishoM from './assets/component/MugadishoM';
// import Mugadisho from './assets/component/Mugadisho'; // Assuming the file is Mugadisho.jsx
import Header from './assets/component/Header';
import Popularone from './assets/component/Popularone';
import Ordernow from './assets/component/Ordernow';
import Slider from './assets/component/Slider';
import ReservationForm from './assets/component/ReservationForm';
 

function App() {
  return (
    <div>
      <Header />
      <Popularone />
      <Ordernow/>
      <Slider />
      <ReservationForm />
      {/* <Mugadisho /> */}
      {/* <MugadishoM /> */}
    </div>
  );
}

export default App;
