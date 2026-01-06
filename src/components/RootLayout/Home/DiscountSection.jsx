const DiscountSection = () => {
  return (
    <section className="wrapper pb-20">
      <div className="py-12 sm:py-20 lg:w-10/12 mx-auto rounded-[50px] bg-secondary/10">
        <div className="text-center mx-auto">
          
          {/* Title */}
          <h2 className="text-xl font-body md:text-3xl lg:text-4xl font-extrabold leading-tight mb-2">
            Enjoy 50% Discounts on Tour Packages
          </h2>
          <h2 className="text-xl sm:text-2xl font-body md:text-3xl lg:text-4xl font-medium leading-tight mb-4">
            Not miss our Exclusive Discounts!
          </h2>

          {/* Details */}
          <p className="text-gray-700 text-xs sm:text-lg mb-10">
            limited-time offers available
            for early bookings.
          </p>

          {/* CTA Button */}
          <button className="btn md:btn-lg btn-secondary md:text-lg">
            Explore Tours
          </button>

        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
