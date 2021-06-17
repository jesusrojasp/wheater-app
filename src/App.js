import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Day from "./components/Day";
import Home from "./components/Home";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {}, [selectedDay]);

  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-400 h-screen w-full">
      <Switch>
        <Route path="/:id">
          <Day selectedDay={selectedDay} />
        </Route>
        <Route path="/">
          <Home setSelectedDay={setSelectedDay} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
