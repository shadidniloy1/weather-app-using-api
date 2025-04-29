// // import React from 'react'

// // const Forecast = ({title, data}) => {

// //   return (
// //     <div>
// //         <div className='flex items-center justify-start mt-6'>
// //             <p className='font-medium uppercase'>{title}</p>
// //         </div>
// //         <hr className='my-1'/>

// //         <div className='flex items-center justify-between'>
// //             {data.map((item, index) =>(
// //                 <div key={index} className='flex flex-col items-center justify-center'>
// //                     <p className='font-light text-sm'>{item.title}</p>
// //                     <img src={item.icon} alt="weather-icon" className='w-12 my-1' />
// //                     <p className='font-medium'>{`${item.temp}`}</p>
// //                 </div>
// //             ))}
// //         </div>
// //     </div>
// //   )
// // }

// // export default Forecast


// import React from 'react';

// const Forecast = ({ title, data }) => {
//   if (!data || data.length === 0) {
//     return (
//       <div>
//         <div className="flex items-center justify-start mt-6">
//           <p className="font-medium uppercase">{title}</p>
//         </div>
//         <hr className="my-1" />
//         <p className="text-center text-gray-500">No forecast data available.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex items-center justify-start mt-6">
//         <p className="font-medium uppercase">{title}</p>
//       </div>
//       <hr className="my-1" />

//       <div className="flex items-center justify-between">
//         {data.map((item, index) => (
//           <div key={index} className="flex flex-col items-center justify-center">
//             <p className="font-light text-sm">{item.title || "N/A"}</p>
//             <img
//               src={item.icon || "https://via.placeholder.com/50"}
//               alt="weather-icon"
//               className="w-12 my-1"
//             />
//             <p className="font-medium">{item.temp ? `${item.temp.toFixed()}°` : "N/A"}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Forecast;


import React from "react";

const Forecast = ({ title, data }) => {
  if (!data || data.length === 0) {
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">{title}</p>
        </div>
        <hr className="my-1" />
        <p className="text-center text-gray-500">No forecast data available.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-md rounded-lg outline-none p-4"
          >
            <p className="font-light text-xs sm:text-sm">{item.title || "N/A"}</p>
            <img
              src={item.icon || "https://via.placeholder.com/50"}
              alt="weather-icon"
              className="w-10 sm:w-12 my-1"
            />
            <p className="font-medium text-sm sm:text-base">
              {item.temp ? `${item.temp.toFixed()}°` : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;