import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const guides = [
  {
    id: 1,
    name: "Rahim Uddin",
    region: "Sylhet",
    specialties: "Tea Gardens, Hill Trails",
    image: "https://i.ibb.co.com/SXP8MTqb/item1.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Faraz Khan",
    region: "Cox’s Bazar",
    specialties: "Beach & Marine Tours",
    image: "https://i.ibb.co.com/B50dzmDT/item2.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Tariq Hasan",
    region: "Bandarban",
    specialties: "Hill Tracks & Tribal Culture",
    image: "https://i.ibb.co.com/fzYsVvBy/item4.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Faraz Khan",
    region: "Cox’s Bazar",
    specialties: "Beach & Marine Tours",
    image: "https://i.ibb.co.com/B50dzmDT/item2.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="wrapper py-20">
      <div className="mb-12">
        <h2 className="font-bold mb-2">Tour Guides</h2>
        <h2 className="text-5xl font-heading font-bold mb-4">
          Meet Our Guides
        </h2>
        <p className="text-base-content/70">
          Our verified guides are local experts ready to make your journey
          memorable.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-4 flex flex-wrap justify-center xl:gap-8 lg:gap-2 gap-8">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="group rounded-box relative md:w-80 sm:w-[272px] lg:w-auto w-80 bg-base-100 shadow-xl overflow-hidden"
          >
            <figure className="pb-24">
              <img
                src={guide.image}
                alt={guide.name}
                className="h-80 w-full object-center object-cover"
              />
            </figure>
            <div className="bg-base-100 items-center text-center py-6 absolute w-full -bottom-22 group-hover:bottom-0 transition-all duration-300 px-6">
              <h3 className="text-2xl font-semibold font-heading">
                {guide.name}
              </h3>
              <p className="text-sm text-base-content/70 italic mt-2">
                <span className="">{guide.specialties}</span>
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="flex gap-3 mt-3 justify-center">
                  <a
                    href={guide.socials.facebook}
                    className="hover:text-primary"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={guide.socials.instagram}
                    className="hover:text-primary"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={guide.socials.twitter}
                    className="hover:text-primary"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={guide.socials.linkedin}
                    className="hover:text-primary"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
