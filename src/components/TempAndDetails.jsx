// import { FaThermometerEmpty, FaWind } from "react-icons/fa";
// import { BiSolidDropletHalf } from "react-icons/bi";
// import { FiWind } from "react-icons/fi";
// import { GiSunrise, GiSunset } from "react-icons/gi";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// const TempAndDetails = ({weather: {
//   temp, details, icon, sunrise, sunset, speed, humidity, temp_min, temp_max, feels_like,
// }}) => {
//   const verticalDetails = [
//     {
//       id: 1,
//       Icon: FaThermometerEmpty,
//       title: "Real Feel",
//       value: `${feels_like.toFixed()}°`,
//     },
//     {
//       id: 2,
//       Icon: BiSolidDropletHalf,
//       title: "Humidity",
//       value: `${humidity.toFixed()}%`,
//     },
//     {
//       id: 3,
//       Icon: FiWind,
//       title: "Wind",
//       value: `${speed.toFixed()} km/h`,
//     },
//   ];

//   const horizontalDetails = [
//     {
//       id: 1,
//       Icon: GiSunrise,
//       title: "Sunrise",
//       value: sunrise,
//     },
//     {
//       id: 2,
//       Icon: GiSunset,
//       title: "Sunset",
//       value: sunset,
//     },
//     {
//       id: 3,
//       Icon: MdKeyboardArrowUp,
//       title: "High",
//       value: `${temp_max.toFixed()}°`,
//     },
//     {
//       id: 4,
//       Icon: MdKeyboardArrowDown,
//       title: "Low",
//       value: `${temp_min.toFixed()}°`,
//     },
//   ];

//   return (
//     <div>
//       <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
//         <p>{details}</p>
//       </div>

//       <div className="flex flex-row items-center justify-between py-3">
//         <img
//           src={icon}
//           alt="icon-w"
//           className="w-20"
//         />
//         <p className="text-5xl">{`${temp.toFixed()}°`}</p>

//         <div className="flex flex-col space-y-3 items-start">
//           {verticalDetails.map(({ id, Icon, title, value }) => (
//             <div
//               key={id}
//               className="flex font-light text-sm items-center justify-center"
//             >
//               <Icon size={20} className="mr-1" />
//               {`${title}: `}
//               <span className="font-medium ml-1">{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-row items-center justify-between py-3 text-sm space-x-10">
//         {horizontalDetails.map(({ id, Icon, title, value }) => (
//           <div key={id} className="flex flex-row items-center">
//             <Icon size={20} />
//             <p className="font-light ml-1">
//               {`${title}: `} <span className="font-medium ml-1">{value}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TempAndDetails;


import { FaThermometerEmpty, FaWind } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetails = ({
  weather: {
    temp,
    details,
    icon,
    sunrise,
    sunset,
    speed,
    humidity,
    temp_min,
    temp_max,
    feels_like,
  },
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} km/h`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div className="text-center">
      {/* Weather Details */}
      <div className="flex items-center justify-center py-6 text-lg sm:text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      {/* Temperature and Vertical Details */}
      <div className="flex flex-col md:flex-row items-center justify-between py-3 space-y-6 md:space-y-0">
        <img src={icon} alt="icon-w" className="w-16 sm:w-20" />
        <p className="text-4xl sm:text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm sm:text-base items-center justify-center"
            >
              <Icon size={20} className="mr-1" />
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 text-sm sm:text-base">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center justify-center">
            <Icon size={20} />
            <p className="font-light ml-1">
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;