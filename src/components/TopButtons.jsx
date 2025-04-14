import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "Chicago",
    },
    {
      id: 4,
      title: "Houston",
    },
    {
      id: 5,
      title: "Miami",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in cursor-pointer">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
