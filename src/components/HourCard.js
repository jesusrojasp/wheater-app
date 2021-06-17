const HourCard = ({ date, icon, temp }) => {
  return (
    <div className="w-24 m-4 backdrop-filter blur-md bg-white  bg-opacity-30 h-auto shadow-lg rounded-xl p-2 flex flex-col justify-center items-center transform transition-all hover:shadow-xl hover:scale-105">
      <p className="font-semibold text-white">
        {`${date
          .toLocaleTimeString()
          .substring(0, date.toLocaleTimeString().lastIndexOf(":"))} ${
          date.getHours() < 12 ? "AM" : "PM"
        }`}
      </p>
      <img
        className="w-20 h-20"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />

      <p className="text-gray-800 font-semibold">{`${temp.substring(
        0,
        temp.indexOf(".")
      )}°`}</p>
    </div>
  );
};

export default HourCard;
