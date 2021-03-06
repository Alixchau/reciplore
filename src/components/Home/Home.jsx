import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home_styles.css';

const Home = () => {
  //init Aos animation
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);

  return (
    <div className='home_container'>
      <div className='innner_container'>
      <h3 className='logo' data-aos="fade-up">Reciplore</h3>
        <h1 data-aos="zoom-in"  data-aos-duration="1600">Explore Recipes & Wines</h1>
        <h3 data-aos="zoom-in"  data-aos-duration="1600">Lorem ipsum dolor sit amet, consectetur adipiscing elitdolore magna aliqua. </h3>
        <div className='homemenuButton' data-aos="fade-down"  data-aos-duration="1000"><div className='button'><Link color="inherit" to="/recipe">Go explore</Link></div>
        <div className='button'> <Link color="inherit" to="/pairedwines">Wine pairing</Link></div></div>
      </div>
    </div>
  )
}

export default Home;


