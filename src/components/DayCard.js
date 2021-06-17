import { useRef } from "react";
import { Link } from "react-router-dom";
import { days } from "../lib/utils";

const DayCard = ({ date, icon, temp_min, temp_max, onClick }) => {
  const linkRef = useRef(null);

  return (
    <div
      onClick={() => {
        onClick();
        linkRef.current.click();
      }}
      className="w-36 m-4 backdrop-filter blur-md bg-white  bg-opacity-30 h-auto shadow-lg rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer transform transition-all hover:shadow-xl hover:scale-110"
    >
      <p className="font-semibold text-white">{days[date.getDay()]}</p>
      <img
        className="w-24 h-24"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />
      <div className="grid grid-cols-2 gap-x-2 font-semibold">
        <p className="text-gray-800">{`${temp_min.substring(
          0,
          temp_min.indexOf(".")
        )}°`}</p>
        <p className="text-gray-50">{`${temp_max.substring(
          0,
          temp_max.indexOf(".")
        )}°`}</p>
      </div>

      <Link
        className="hidden"
        to={days[date.getDay()].toLowerCase()}
        ref={linkRef}
      ></Link>
    </div>
  );
};

export default DayCard;
