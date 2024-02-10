import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  let h = time.toLocaleTimeString();
  let day = new Date().getDate();
  let date = new Date().toLocaleDateString("locale", { weekday: "short" });
  // let month = new Date().getMonth()+1;
  let month = new Date().toLocaleString("default", { month: "short" });
  let year = new Date().getFullYear();
  return (
    <>
      <div className="clock w-80 h-64 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center text-white">
        <div id="dateC" className="text-[aqua] text-2xl my-3">
          {date} {day} {month}, {year}
        </div>
        <div id="time" className="text-[aqua] text-3xl my-3">
          {h}
        </div>
      </div>
    </>
  );
}

export default Clock;
