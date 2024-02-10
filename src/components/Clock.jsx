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
      <div
        className="w-full flex items-center justify-center h-[585px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://t4.ftcdn.net/jpg/01/16/88/37/360_F_116883786_wuckft1sNw1ouQfJ6FuquZnxea3qBlxy.jpg)",
        }}
      >
        <div className="clock w-80 h-64 p-8 bg-slate-950 rounded-lg shadow-lg flex flex-col justify-center items-center text-white">
          <div
            id="dateC"
            className="text-[aqua] text-2xl flex gap-3 my-3"
          >
            <span>{date}</span>
            <span>{day}</span>
            <span>{month},</span>
            <span>{year}</span>
          </div>
          <div id="time" className="text-[aqua] text-3xl my-3">
            {h}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
