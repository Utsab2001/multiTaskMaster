import React, { useState, useEffect } from "react";

const Weather2 = () => {
  const [current, setCurrent] = useState({});
  const [city, setCity] = useState("");
  const API_KEY = "cade3e429711499681b190434240402";
  const [URL, setURL] = useState(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=yes&days=5`
  );
  const [cityValue, setCityValue] = useState("");
  const [forecast, setForecast] = useState({});
  const [placeholder, setPlaceholder] = useState("Search...");
  const handleInputChange = (event) => {
    setCityValue(event.target.value);
  };
const handleSearch = () => {
  console.log("Search for city:", cityValue);
  setCity(cityValue ? cityValue : "kolkata");
  setPlaceholder(cityValue ? cityValue : "Search...");
  const newURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityValue?cityValue:"kolkata"}&aqi=yes&days=5`;
  // console.log("New URL:", newURL);
  setURL(newURL);
};
  const array1 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const array2 = [0, 1, 2, 3, 4];
  const fetchWeather = async () => {
    let url = URL;
    try {
      let data = await fetch(url);
      if (data.ok) {
        let parseData = await data.json();
        setCurrent(parseData.current);
        setForecast(parseData.forecast);
        setCity(cityValue);
      } else {
        url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=kolkata&aqi=yes&days=5`;
      let data = await fetch(url);
                let parseData = await data.json();
                setCurrent(parseData.current);
                setForecast(parseData.forecast);
                setCity(cityValue);
        // If the response is not ok, log the error
        console.error("Error fetching weather data:", data.status);
        setCity("kolkata")
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  useEffect(() => {
    fetchWeather();
  }, [city]);
  useEffect(() => {
    console.log(forecast);
    console.log(current);
  }, [forecast]); // This ensures the useEffect runs whenever forecast is updated

  return (
    <>
      {forecast && forecast.forecastday && forecast.forecastday[0] && (
        <div
          className="h-auto text-white items-center px-20 w-[100%] xml:h-[585px] bg-cover bg-center bg-opacity-50 overflow-hidden "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          }}
        >
          <nav className="h-[100px] flex justify-between items-center mb-5 p-5 ">
            <h2 className="text-xl font-bold">Weather.com</h2>
            <div className="flex items-center h-10 border rounded-full border-white">
              <input
                type="text"
                placeholder={placeholder}
                className="rounded-l-lg px-4 py-2 w-64 focus:outline-none  bg-transparent"
                value={cityValue}
                onChange={handleInputChange}
              />
              <button
                onClick={handleSearch}
                className="bg-transparent  border-none text-gray-200 font-semibold hover:text-white py-2 px-4  rounded-r-lg"
              >
                Search
              </button>
            </div>
          </nav>
          <section className="flex flex-col justify-between pb-10 h-auto xml:flex-row">
            <div className="left h-[430px]  xml:w-2/5 flex flex-col justify-end items-left p-5 py-10  gap-3 ">
              <div className="flex gap-5">
                <h2 className="text-5xl font-bold">
                  {current.temp_c}°c
                  {/* {forecast.forecastday[0].day.maxtemp_c}°c */}
                </h2>
                <img src={forecast.forecastday[0].day.condition.icon} alt="" />
                {/* <img src="./cloud1.png" alt="" /> */}
              </div>
              <h3 className="text-3xl font-semibold">{city}</h3>
              <p className="text-lg">
                Time | {forecast.forecastday[0].day.maxtemp_c}°/
                {forecast.forecastday[0].day.mintemp_c}°
              </p>
            </div>
            <div className="right flex flex-col w-3/5 gap-5 p-5 pt-1 h-[430px] overflow-y-auto no-scrollbar">
              <div
                className="rounded-xl  py-20 px-5 flex flex-col justify-center overflow-y-hidden overflow-x-scroll no-scrollbar h-96"
                style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
              >
                <div className="flex gap-7 justify-between ">
                  {array1.map((item) => {
                    // Check if forecast and forecastday exist and have length > 0
                    if (
                      forecast &&
                      forecast.forecastday &&
                      forecast.forecastday.length > 0
                    ) {
                      // Check if forecastday[0].hour[item] exists
                      const hourData = forecast.forecastday[0].hour[item];
                      if (hourData) {
                        return (
                          <div className="flex gap-2 flex-col items-center">
                            <p className="text-base">
                              {hourData.time.substring(11)}
                            </p>
                            <img src={hourData.condition.icon} alt="" />
                            <p className="text-base">{hourData.temp_c}°</p>
                          </div>
                        );
                      } else {
                        // If hourData doesn't exist, return null or a placeholder
                        return null; // or return a placeholder div
                      }
                    } else {
                      // If forecast data is not available, return null or a loading indicator
                      return null; // or return a loading indicator
                    }
                  })}
                </div>
              </div>
              {/* Add the remaining components here */}
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
              >
                <h5 className="text-base mb-1 ml-5">5 Day Forecast</h5>
                {array2.map((item) => {
                  return (
                    <>
                      {/* <div className="bg-pink-400" key={item}>
                        {forecast.forecastday[0].hour[item].time.substring(11)}
                      </div> */}
                      <div className="flex justify-around items-center">
                        <p className="text-base">
                          {forecast.forecastday[item].date}
                        </p>
                        <img
                          src={forecast.forecastday[item].day.condition.icon}
                          alt="image"
                          width={40}
                        />
                        <p className="text-base w-11">
                          {forecast.forecastday[item].day.maxtemp_c}°
                        </p>
                        <p className="text-base"> | </p>
                        <p className="text-base w-11">
                          {forecast.forecastday[item].day.mintemp_c}°
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="">
                <h5 className="text-base mb-1 ml-5">Detailed Information</h5>
                <div className="flex justify-between gap-5 flex-wrap">
                  <div
                    className="flex flex-col justify-center rounded-xl gap-3 pl-10 p-5 min-w-40 w-[45%]"
                    style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                  >
                    <img src="thermo.png" alt="" width={24} />
                    <p className="text-sm">Feels like</p>
                    <h2 className="text-xl">{current.feelslike_c}°</h2>
                  </div>
                  <div
                    className="flex flex-col justify-center rounded-xl pl-10 gap-3 p-5 min-w-40 w-[45%]"
                    style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                  >
                    <img src="wind.png" alt="" width={24} />
                    <p className="text-sm">WindSpeed</p>
                    <h2 className="text-xl">{current.wind_mph}</h2>
                  </div>
                  <div
                    className="flex flex-col justify-center rounded-xl pl-10 gap-3 p-5 min-w-40 w-[45%]"
                    style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                  >
                    <img src="humidity.png" alt="" width={24} />
                    <p className="text-sm">Humidity</p>
                    <h2 className="text-xl">{current.humidity}%</h2>
                  </div>
                  <div
                    className="flex flex-col justify-center rounded-xl pl-10 gap-3 p-5 min-w-40 w-[45%]"
                    style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                  >
                    <img src="sun1.png" alt="" width={24} />
                    <p className="text-sm">UV</p>

                    <h2 className="text-xl">
                      {current.uv}
                      <span className="text-sm "> very weak</span>
                    </h2>
                  </div>
                  <div
                    className="flex flex-col justify-center rounded-xl pl-10 gap-3 p-5 min-w-40 w-[45%]"
                    style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                  >
                    <img src="visibility.png" alt="" width={24} />
                    <p className="text-sm">Visibility</p>
                    <h2 className="text-xl">{current.vis_miles}mi</h2>
                  </div>
                  <div
                    className="flex flex-col justify-center rounded-xl pl-10 gap-3 p-5 min-w-40 w-[45%]"
                    style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
                  >
                    <img src="airPressure.png" alt="" width={24} />
                    <p className="text-sm">Air Pressure</p>
                    <h2 className="text-xl">{current.pressure_mb}hPa</h2>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1592728833619-eb0b125ec069?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Jlc2NlbnQlMjBtb29ufGVufDB8fDB8fHww)",
                }}
                className="rounded-xl bg-cover bg-center bg-no-repeat bg-opacity-50 backdrop-blur-sm flex justify-between p-10 py-5"
              >
                <div className="flex flex-col gap-14 items-center">
                  <img src="sunrise.png" alt="" width={30} />
                  <div className="text-center gap-3">
                    <p className="text-sm">Sunrise</p>
                    <p className="text-md font-semibold">
                      {forecast.forecastday[0].astro.sunrise}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-14 items-center">
                  <img src="sunset.png" alt="" width={30} />
                  <div className="text-center gap-3">
                    <p className="text-sm">Sunset</p>
                    <p className="text-md font-semibold">
                      {forecast.forecastday[0].astro.sunset}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Weather2;
