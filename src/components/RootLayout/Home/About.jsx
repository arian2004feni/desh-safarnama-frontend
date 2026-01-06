import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import UnsplashImg from "../../UnsplashImg";

const About = () => {
  return (
    <section className="wrapper py-28">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-20">
          <div>
            <UnsplashImg
              className="rounded-box overflow-hidden"
              author={"Mamun Srizon"}
              authorId={
                "https://unsplash.com/@mamunsrizon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              }
              unsplashId={
                "https://unsplash.com/photos/brown-and-white-deer-during-daytime-v6A4nXxqkFo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              }
            >
              <img
                src="/Images/Home/about-1.png"
                alt="Photo of a Tourist"
                className="sm:w-sm"
              />
            </UnsplashImg>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <h2 className="text-6xl font-heading mb-6">
                Personalized travel experiences
              </h2>
              <p className="text-lg">
                Explore Bangladesh with trusted guides, curated travel packages,
                and real stories from adventurers. Whether you're a local or a
                first-time visitor, our platform makes your journey effortless,
                inspiring, and unforgettable.
              </p>
            </div>
            <div className="space-x-3">
              <button className="btn btn-secondary text-secondary-content text-base">
                Learn More
              </button>
              <button className="btn btn-ghost text-base">
                Watch Video <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full">
          <UnsplashImg
          className='max-sm:w-full w-xl rounded-box overflow-hidden'
            author={"Md Mehedi"}
            authorId={
              "https://unsplash.com/@mahdi17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTextv"
            }
            unsplashId={
              "https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-sitting-on-rock-cv3UGRF1klM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTexthttps://unsplash.com/photos/man-in-black-crew-neck-t-shirt-sitting-on-rock-cv3UGRF1klM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            }
          >
            <img src="/Images/Home/about-2.png" alt="Photo of a Tourist" />
          </UnsplashImg>
        </div>
      </div>
    </section>
  );
};

export default About;
