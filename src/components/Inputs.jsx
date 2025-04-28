import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({setQuery, setUnits}) => {

  const [city, setCity] = useState("");

  const handleSearch = () => {
    if(city !== "") setQuery({q: city});
  }

  const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setQuery({lat, lon});
      }, () => null);
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city..."
          className="bg-white text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />

        <BiSearch
          size={30}
          onClick={handleSearch}
          className="cursor-pointer transition ease-out hover:scale-125"
        />

        <BiCurrentLocation
          size={30}
          onClick={handleLocationClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("metric")}>
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("imperial")}>
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
