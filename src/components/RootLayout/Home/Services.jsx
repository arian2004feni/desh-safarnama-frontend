import { FaMapMarkedAlt, FaUserShield, FaRoute } from "react-icons/fa";

const Services = () => {
  const servicesContent = [
    {
      id: 1,
      icon: FaMapMarkedAlt,
      title: "Easy Booking",
      description:
        "Tourists can easily explore destinations, book tours, make payments, and track progress.",
    },
    {
      id: 2,
      icon: FaUserShield,
      title: "Centralized Control",
      description:
        "Admins manage packages, bookings, ensuring smooth system operations and service quality.",
    },
    {
      id: 3,
      icon: FaRoute,
      title: "Professional Guides",
      description:
        "Tour guides handle assigned tours, verify tracking numbers, deliver successful trips.",
    },
  ];
  return (
    <section className="wrapper py-20">
      <div className="flex flex-col lg:flex-row xl:gap-20 lg:gap-4 gap-10">
        <div className="">
          <div>
            <p className="mb-2 font-bold">Services</p>
            <h2 className="text-5xl font-heading font-bold mb-4">
              What You'll get
            </h2>
            <p className="text-gray-500">
              We offers a complete tourism management solution that connects
              tourists, tour guides, and administrators in one smart and
              reliable platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {servicesContent.map((service) => {
            const { icon: Icon } = service;
            return (
              <>
                <div key={service.id} className="max-lg:py-6 md:px-2 p-6 flex md:flex-col gap-5">
                  <div className="max-md:my-auto">
                    <Icon className="text-primary text-5xl"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
