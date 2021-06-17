import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/OpenWeather";
import { days } from "../lib/utils";
import HourCard from "./HourCard";

const Day = ({ selectedDay }) => {
  const [day, setDay] = useState(0);
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=9.93&lon=-84.08&units=metric&exclude=minutely,daily&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setDay(new Date(result.list[1 * selectedDay * 8].dt * 1000).getDay());
        let days = result.list.filter(
          (item, i) => i >= 0 + 8 * selectedDay && i <= 8 * selectedDay + 7
        );
        console.log(days);
        let _hourlyData = [];
        for (let day of days) {
          _hourlyData.push({
            date: new Date(day.dt * 1000),
            icon: day.weather[0].icon,
            temp: day.main.temp.toString(),
          });
        }
        setHourlyData(_hourlyData);
      })
      .catch((err) => console.error(err));
  }, [selectedDay]);

  return (
    <div className="h-screen flex flex-col justify-center items-center p-6">
      {hourlyData.length > 0 ? (
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="font-bold text-4xl text-white text-center">
            {days[day]} weather for San José, Costa Rica
          </h1>

          <Link
            className="my-4 font-semibold text-purple-900 py-2 px-4 text-xl"
            to={"/"}
          >
            See all days
          </Link>
        </div>
      ) : (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className="flex flex-row justify-center items-center flex-wrap overflow-y-auto">
        {hourlyData.map((card, i) => (
          <HourCard
            key={i}
            date={card.date}
            icon={card.icon}
            temp={card.temp}
          ></HourCard>
        ))}
      </div>
    </div>
  );
};

export default Day;
