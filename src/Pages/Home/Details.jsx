import React from "react";
import CountUp from "react-countup";

const Details = () => {
  const stats = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
      count: 199,
      label: "Total Lawyer",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      count: 467,
      label: "Total Reviews",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3064/3064826.png",
      count: 1900,
      label: "Cases Initiated",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      count: 300,
      label: "Total Staffs",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          We Provide Best Law Services
        </h1>
        <p className="text-gray-600 mb-10">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center"
            >
              <img src={stat.icon} alt={stat.label} className="w-12 h-12 mb-4" />
              <h2 className="text-3xl font-bold text-primary">
                <CountUp end={stat.count} duration={2} />+
              </h2>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
