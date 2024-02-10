import React, { useState, useEffect } from "react";

const Dummy = () => {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState({});
  const array = [1,2,3,4,5,6,7,8,9]
  const API_KEY = "cade3e429711499681b190434240402";
  const fetchWeather = async () => {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&aqi=yes&days=5`;
    try {
      let data = await fetch(url);
      let parseData = await data.json();
      setCurrent(parseData.current);
      setForecast(parseData.forecast);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  useEffect(() => {
    console.log(forecast);
    // console.log(forecast.forecastday[0].astro.sunset);
  }, [forecast]); // This ensures the useEffect runs whenever forecast is updated

  return (
    <>
      {forecast && forecast.forecastday && forecast.forecastday[0] && (
        <div className="text-black">
          {/* {forecast.forecastday[0].astro.sunset} */}
          {/* {forecast.forecastday[0].hour[0].temp_c} */}
          {/* {forecast.forecastday[0].hour[1].time}  */}
          {array.map((item) => {
            return (
              <div className="bg-pink-400" key={item}>
                {forecast.forecastday[0].hour[item].time.substring(11)}
              </div>
            );
          })}
        </div>
      )}
      ;
    </>
  );
};

export default Dummy;

