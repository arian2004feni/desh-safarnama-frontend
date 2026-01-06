import React from 'react';
import Hero from '../components/RootLayout/Home/Hero';
import About from '../components/RootLayout/Home/About';
import FeaturedPackages from '../components/RootLayout/Home/FeaturedPackages';
import OurTeam from '../components/RootLayout/Home/OurTeam';
import Services from '../components/RootLayout/Home/Services';
import AboutVideo from '../components/RootLayout/Home/AboutVideo';
import DiscountSection from '../components/RootLayout/Home/DiscountSection';

const Home = () => {
  return (
    <>
     <Hero /> 
     <About />
     <div className="bg-base-200">
        <FeaturedPackages />
        <OurTeam />
      </div>
      <Services />
     <div className="bg-base-200">
      <AboutVideo />
      <DiscountSection />
     </div>
    </>
  );
};

export default Home;