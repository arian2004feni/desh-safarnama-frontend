import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const PackageCard = ({ pkg }) => {
  const { title, location, price, duration, rating, img, guide } = pkg || {};
  return (
    <div className="card bg-base-100">
      <figure className="px-4 pt-4 overflow-hidden relative">
        <img
          src={img || "Images/Home/about-1.png"}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "Images/Home/about-1.png";
          }}
          className="rounded-box h-68 object-center object-cover bg-amber-100 w-full"
        />
        <p className="absolute top-8 right-8 badge border-none font-bold bg-white/20 backdrop-blur-xs">
          <FaStar className="text-amber-500" /> <span>{rating}</span>
        </p>
        <Link className="absolute top-8 left-8 badge border-none font-medium bg-accent/50 text-white backdrop-blur-sm">
          <FiMapPin /> <span>{location}</span>
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">
          <Link className="hover:link line-clamp-2">{title}</Link>
        </h2>
        <p className="pb-3">
          by <Link className="font-medium hover:link">{guide}</Link>
        </p>
        {/* <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p> */}
        <div className="card-actions pt-3 gap-5 justify-center border-t border-gray-300">
          <span className="text-xl my-auto font-bold ">{price}৳</span>
          <p className="my-auto text-lg font-medium border-x border-gray-300 text-center">
            {duration} days
          </p>
          <button className="btn btn-primary btn-soft btn-lg btn-circle">
            <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
