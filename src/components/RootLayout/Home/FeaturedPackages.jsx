import React from "react";
import PackageCard from "../../PackageCard";

const FeaturedPackages = () => {
  const PACKAGES = [
    {
      id: 1,
      title: "Sundarbans Tiger Safari",
      location: "Khulna District",
      price: 12500,
      duration: 4,
      rating: 4.8,
      reviews: 412,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1520201163981-1d4a3f0b5b0a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
      short:
        "Boat safari, mangrove trails & wildlife spotting in the largest mangrove forest.",
    },
    {
      id: 2,
      title: "Cox's Bazar Relaxation",
      location: "Cox's Bazar",
      price: 8000,
      duration: 4,
      rating: 4.6,
      reviews: 289,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
      short:
        "Sun, sand and the world's longest natural sea beach with sunset views.",
    },
    {
      id: 3,
      title: "Srimangal Tea Trails",
      location: "Srimangal",
      price: 6500,
      duration: 4,
      rating: 4.7,
      reviews: 174,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
      short: "Tea gardens, tribal villages and the famous seven-layer tea.",
    },
    {
      id: 4,
      title: "Sajek Valley Escape",
      location: "Rangamati",
      price: 14000,
      duration: 4,
      rating: 4.9,
      reviews: 223,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b471?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
      short:
        "Hills, sunrise points and starlit skies in the scenic Sajek Valley.",
    },
    {
      id: 5,
      title: "Paharpur Heritage Visit",
      location: "Naogaon",
      price: 7000,
      duration: 4,
      rating: 4.5,
      reviews: 102,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
      short:
        "Explore the ruins of the ancient Buddhist monastery and archaeology.",
    },
    {
      id: 6,
      title: "Kuakata Sunrise Tour",
      location: "Patuakhali",
      price: 4500,
      duration: 4,
      rating: 4.4,
      reviews: 88,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6",
      short: "Wide sea views and both sunrise & sunset from the same beach.",
    },
    {
      id: 7,
      title: "Dhaka Cultural Walk",
      location: "Dhaka",
      price: 2200,
      duration: 4,
      rating: 4.3,
      reviews: 54,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1541781774459-30c9d1f6f1a4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7",
      short: "Heritage sites, local food tasting and rickshaw city lanes.",
    },
    {
      id: 8,
      title: "Jaflong River & Stone Garden",
      location: "Sylhet",
      price: 5600,
      duration: 4,
      rating: 4.6,
      reviews: 132,
      guide: "Md Mizanur Rahman",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8",
      short:
        "River views, rolling hills and Khasi tribal markets near the border.",
    },
  ];
  return (
    <section className="wrapper py-20">
      <div className="mb-12">
        <div>
          <p className="mb-2 font-bold">Tours</p>
          <h2 className="text-5xl font-heading font-bold mb-4">
            Curated travel experiences
          </h2>
          <p className="text-gray-500">
            Top hand-picked, bookable tours across Bangladesh.
          </p>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {PACKAGES.map((pkg) => (
          <PackageCard pkg={pkg} key={pkg?.id} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn text-base btn-accent">View More</button>
      </div>
    </section>
  );
};

export default FeaturedPackages;
