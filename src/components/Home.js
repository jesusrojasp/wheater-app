import { useEffect, useState } from "react";
import { api } from "../lib/OpenWeather";
import DayCard from "./DayCard";

const Home = ({ setSelectedDay }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=9.93&lon=-84.08&&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        // After the data is fetch, filter it to exactly 5 days and extract only the necessary fields
        let days = result.daily.filter((item, i) => i < 5);
        let _cards = [];
        for (let day of days) {
          _cards.push({
            date: new Date(day.dt * 1000),
            icon: day.weather[0].icon,
            temp_min: day.temp.min.toString(),
            temp_max: day.temp.max.toString(),
          });
        }
        setCards(_cards);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      {cards.length > 0 ? (
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="font-bold text-4xl mb-20 text-white text-center">
            Weather forecast for San José, Costa Rica
          </h1>
          <div className="flex flex-row justify-center items-center flex-wrap overflow-y-auto">
            {cards.map((card, i) => (
              <DayCard
                onClick={() => setSelectedDay(i)}
                key={i}
                date={card.date}
                icon={card.icon}
                temp_min={card.temp_min}
                temp_max={card.temp_max}
              ></DayCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Home;
