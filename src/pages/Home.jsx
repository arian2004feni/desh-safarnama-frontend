import React from 'react';
import Hero from '../components/RootLayout/Home/Hero';
import About from '../components/RootLayout/Home/About';
import FeaturedPackages from '../components/RootLayout/Home/FeaturedPackages';
import OurTeam from '../components/RootLayout/Home/OurTeam';

const Home = () => {
  return (
    <>
     <Hero /> 
     <About />
     <div className="bg-base-200">
        <FeaturedPackages />
        <OurTeam />
      </div>
    </>
  );
};

export default Home;