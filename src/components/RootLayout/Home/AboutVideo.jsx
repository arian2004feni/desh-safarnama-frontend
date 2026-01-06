import { FaPlay } from "react-icons/fa";

const AboutVideo = () => {
  return (
    <section className="py-20 wrapper">
        <div className="flex flex-col xl:flex-row gap-12 items-center">
          
          {/* Left: Video Thumbnail */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Explore Bangladesh"
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="btn btn-circle btn-primary bg-primary/60 border-none hover:bg-primary btn-lg text-2xl size-20 hover:scale-110 transition">
                <FaPlay />
              </span>
            </button>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-5xl font-heading font-bold mb-4">
              Discover Bangladesh Like Never Before
            </h2>

            <h4 className="text-lg text-primary font-semibold mb-6">
              One Platform. Endless Travel Stories.
            </h4>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg xl:text-base 2xl:text-lg">
              Desh Safarnama is more than a tourism website — it is a complete travel
              management ecosystem. From discovering iconic landmarks and hidden
              gems to booking guided tours with real-time tracking, we make travel
              planning smarter and stress-free. Our platform connects tourists,
              professional tour guides, and admins to ensure a smooth, reliable,
              and memorable travel experience across Bangladesh.
            </p>

            <button className="btn btn-primary btn-soft btn-lg">
              Watch Video
            </button>
          </div>

        </div>
    </section>
  );
};

export default AboutVideo;
