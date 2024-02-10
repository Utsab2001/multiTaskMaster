import React, { useState, useEffect } from "react";

const Weather = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [current, setCurrent] = useState({});
  const [condition, setCondition] = useState({});
  const [forecast, setForecast] = useState({});
  const[hourData,setHourData] = useState({})
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [maxtemp, setMaxtemp] = useState(0);
  const [mintemp, setMintemp] = useState(0);
  const API_KEY = "cade3e429711499681b190434240402";
  const fetchWeather = async () => {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&aqi=yes&days=5`;
    try {
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      setCurrent(parseData.current);
      setForecast(parseData.forecast);
      // const moonRise = parseData.forecast.forecastday[0].astro.moonrise;
      // const moonSet = parseData.forecast.forecastday[0].astro.moonset;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  useEffect(() => {
    console.log(forecast);
  }, [forecast]);


  return (
    <>
      <section className="flex flex-col gap-5 text-white p-5 items-center overflow-hidden max-w-[400px]">
        <div className="text-left w-full pl-2 mb-14">
          <h1 className="text-4xl ">London</h1>
        </div>
        <div className="flex flex-col gap-3 items-start w-full pl-2">
          <h2 className="text-lg ">
            <span className="text-7xl font-semibold">{current.temp_c}</span>
            <span className="text-7xl font-thin ">°</span>
            {condition.text}
          </h2>
          <div className="flex gap-3 pl-3">
            <p className="text-sm">
              {maxtemp}° / {mintemp}°
            </p>
            <p className="text-sm">Air quality: 330 - Very poor</p>
          </div>
        </div>
        <div className="flex bg-slate-950 rounded-xl gap-4 p-5 justify-between w-full overflow-x-scroll no-scrollbar">
          <div className="flex flex-col gap-2 text-center py-0 px-2">
            <p className="text-xs">
              {array.map((item) =>
                forecast.forecastday[0].hour[item].time
              )}
            </p>
            <p className="text-xs">img</p>
            {/* <img src= alt="" /> */}
            <p className="text-xs">juyh</p>
          </div>
        </div>
        <div className="flex flex-col bg-slate-950 rounded-xl gap-4 p-5 items-center justify-between w-full">
          <h5 className="text-base">Today's Temperature</h5>
          <p className="text-xs text-gray-500">Expect the same as yesterday</p>
        </div>
        <div className="flex flex-col bg-slate-950 rounded-xl gap-4 p-5 items-center justify-between w-full">
          <div className="flex justify-around w-full text-gray-500">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <div className="flex justify-around w-full">
            <p className="text-xs">yesterday</p>
            <p className="text-xs">Haze</p>
            <p className="text-xs">26 / 15</p>
          </div>
          <p className="text-xs font-semibold mt-2">15 day weather forecast</p>
        </div>
        <div className="flex flex-col bg-slate-950 rounded-xl gap-4 p-5 justify-between w-full">
          <p className="text-xs">Air Quality</p>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Very Poor</h3>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              unde.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <p className="text-xs text-gray-500">Weather Details</p>
          <div className="flex flex-wrap justify-between gap-3 w-full">
            <div className="flex flex-col gap-1 bg-slate-950 p-5 rounded-xl min-w-[140px] w-[48%]">
              <p className="text-sm">im</p>
              <p className="text-sm text-gray-500">Feels like</p>
              <h3 className="text-xl">{current.feelslike_c}°</h3>
            </div>

            <div className="flex flex-col gap-1 bg-slate-950 p-5 rounded-xl min-w-[140px] w-[48%]">
              <p className="text-sm">im</p>
              <p className="text-sm text-gray-500">WindSpeed</p>
              <h3 className="text-xl">{current.wind_mph}</h3>
            </div>
            <div className="flex flex-col gap-1 bg-slate-950 p-5 rounded-xl min-w-[140px] w-[48%]">
              <p className="text-sm">im</p>
              <p className="text-sm text-gray-500">Humidity</p>
              <h3 className="text-xl">{current.humidity}%</h3>
            </div>
            <div className="flex flex-col gap-1 bg-slate-950 p-5 rounded-xl min-w-[140px] w-[48%]">
              <p className="text-sm">im</p>
              <p className="text-sm text-gray-500">UV</p>
              <h3 className="text-xl">
                {current.uv}
                <span className="text-sm "> very weak</span>
              </h3>
            </div>
            <div className="flex flex-col gap-1 bg-slate-950 p-5 rounded-xl min-w-[140px] w-[48%]">
              <p className="text-sm">im</p>
              <p className="text-sm text-gray-500">Visibility</p>
              <h3 className="text-xl">{current.vis_miles}mi</h3>
            </div>
            <div className="flex flex-col gap-1 bg-slate-950 p-5 rounded-xl min-w-[140px] w-[48%]">
              <p className="text-sm">im</p>
              <p className="text-sm text-gray-500">Air Pressure</p>
              <h3 className="text-xl">{current.pressure_mb}hPa</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-slate-950 rounded-xl gap-4 p-5 justify-between w-full">
          <div className="flex justify-between">
            <p className="text-sm">im</p>
            <p className="text-sm">im</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col text-left">
              <p className="text-xs text-gray-500">Sunrise</p>
              <p className="text-sm">{sunRise}</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-xs text-gray-500">Sunset</p>
              <p className="text-sm">{sunSet}</p>
            </div>
          </div>
        </div>
        <div className="flex rounded-xl flex-wrap justify-between gap-3 w-full">
          <div className="flex justify-center items-center gap-5 bg-slate-950 rounded-xl  min-w-[140px] w-[48%] p-5 ">
            {/* <img src="" alt="" /> */}
            <p className="text-lg">im</p>
            <p className="text-sm">Lorem ipsum dolor....</p>
          </div>
          <div className="flex justify-center items-center gap-5 bg-slate-950 rounded-xl  min-w-[140px] w-[48%] p-5 ">
            {/* <img src="" alt="" /> */}
            <p className="text-lg">im</p>
            <p className="text-sm">Lorem ipsum dolor....</p>
          </div>
          <div className="flex justify-center items-center gap-5 bg-slate-950 rounded-xl  min-w-[140px] w-[48%] p-5 ">
            {/* <img src="" alt="" /> */}
            <p className="text-lg">im</p>
            <p className="text-sm">Lorem ipsum dolor....</p>
          </div>
          <div className="flex justify-center items-center gap-5 bg-slate-950 rounded-xl  min-w-[140px] w-[48%] p-5 ">
            {/* <img src="" alt="" /> */}
            <p className="text-lg">im</p>
            <p className="text-sm">Lorem ipsum dolor....</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
