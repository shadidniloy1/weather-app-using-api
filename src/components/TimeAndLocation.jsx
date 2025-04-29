// import React from 'react'

// const TimeAndLocation = ({weather: {formattedLocalTime, name, country}}) => {
//   return (
//     <div>
//         <div className='flex items-center justify-center my-6'>
//             <p className="font-extralight text-xl">{formattedLocalTime}</p>
//         </div>
//         <div className='flex items-center justify-center my-3'>
//             <p className='text-3xl font-medium'>{`${name}, ${country}`}</p>
//         </div>
//     </div>
//   )
// }

// export default TimeAndLocation


import React from "react";

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div className="text-center">
      {/* Time Section */}
      <div className="flex items-center justify-center my-4">
        <p className="font-extralight text-sm sm:text-lg md:text-xl">
          {formattedLocalTime}
        </p>
      </div>

      {/* Location Section */}
      <div className="flex items-center justify-center my-3">
        <p className="text-lg sm:text-2xl md:text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;