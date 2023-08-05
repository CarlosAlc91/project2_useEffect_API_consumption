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

  const tempConvertion = isCelsius
    ? kelvinToCelsius(weather?.main.temp)
    : kelvinToFahrenheit(weather?.main.temp);

  const tempConvertionIcon = isCelsius ? "C" : "F";

  return (
    <section className="text-center">
      <h2 className="text-2xl mb-5 text-black font-semibold">
        {weather?.name}
      </h2>
      <section className="grid gap-4 sm:grid-cols-[auto_auto] text-black">
        {/* section superior */}
        <section className="bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center  font-semibold">
          <h4 className="col-span-2 text-[#3E3E3E] text-lg pt-3 capitalize">
            {weather?.weather[0].description}
          </h4>
          <span className="text-[50px]">
            {tempConvertion}°{tempConvertionIcon}
          </span>
          <div>
            <img
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
          <div className="border-l border-gray-300 h-full my-4 sm:my-0 sm:w-0 sm:h-0 sm:border-t sm:border-b"></div>
          <article className="flex gap-2 items-center">
            <div className="w-[22px]">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weather?.main.humidity}%</span>
          </article>
          <div className="border-l border-gray-300 h-full my-4 sm:my-0 sm:w-0 sm:h-0 sm:border-t sm:border-b"></div>
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
        className="mt-4 bg-white text-[#4580BA] rounded-[20px] px-6 py-1 "
      >
        Change to F°
      </button>
    </section>
  );
};
export default Weather;
