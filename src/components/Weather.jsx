/* informacion y estructura del clima */

import { useState } from "react";

const Weather = ({ weather }) => {
  /* estado */
  const [isCelsius, setIsCelsius] = useState(true);
  /* console.log({ weather }); */

  /* funcion de k a c */
  const kelvinToCelsius = (temp) => {
    /*  */
    const converter = (temp - 272.15).toFixed(1);
    return converter;
  };

  /* funcion de k a f */
  const kelvinToFahrenheit = (tempF) => {
    const converter2 = ((tempF - 272.15) * 1.8 + 32).toFixed(1);
    return converter2;
  };

  const handlerUnitChange = () => {
    setIsCelsius(!isCelsius);
  };

  const handlerCitySearch = (e) => {
    e.preventDefault();
    const cityName = weather.sys.country;

    const API_KEY = "8b347c22d8ba681af6bc0e53cbf63b65";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  };

  const tempConvertion = isCelsius
    ? kelvinToCelsius(weather?.main.temp)
    : kelvinToFahrenheit(weather?.main.temp);

  const tempConvertionIcon = isCelsius ? "C" : "F";
  const tempConvertionButton = isCelsius ? "Change to F°" : "Change to C°";

  return (
    <section className="text-center">
      <h2 className="text-3xl mb-5 text-black font-semibold">
        {weather?.name}
      </h2>
      {/* input */}
      <form
        onSubmit={handlerCitySearch}
        className="flex rounded-xl overflow-hidden max-w-max mx-auto"
      >
        <input
          placeholder="Enter your city"
          className="text-black pl-2"
          type="text"
        />
        <button className="bg-white/40 px-4 py-1">Search</button>
      </form>
      <section className="grid gap-4 py-11 sm:grid-cols-[auto_auto] text-black">
        {/* section superior */}
        <section className="bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2 text-[#3E3E3E] text-2xl pt-3 capitalize">
            {weather?.weather[0].description}
          </h4>
          <span className="text-6xl">
            {tempConvertion}°{tempConvertionIcon}
          </span>
          <div>
            <img
              className={handler}
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>
        {/* section inferior */}
        <section className="bg-white/40 p-2 py-8 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1 font-semibold">
          <article className="flex gap-2 items-center">
            <div className="w-[22px]">
              <img src={"/images/wind.png"} alt="" />
            </div>
            <span>{weather?.wind.speed} m/s</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[22px]">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weather?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[22px]">
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span>{weather?.main.pressure} hPa</span>
          </article>
        </section>
      </section>
      <button
        onClick={handlerUnitChange}
        className="mt-4 bg-white text-[#4580BA] font-semibold rounded-[20px] px-6 py-1 "
      >
        {tempConvertionButton}
      </button>
    </section>
  );
};
export default Weather;
