import React from "react";

const Hero = () => {
  return (
    <header
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/nhtXcP7/image.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="sm:max-w-3xl">
          <h1 className="mb-5 text-7xl font-bold font-heading">
            Discover the Soul of Bangladesh
          </h1>
          <p className="mb-5 text-xl">
            Find your next adventure — explore hidden destinations, book guided
            tours, and experience stories from real travelers.
          </p>
          <button className="btn btn-primary">Start Exploring</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
