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
      I will get a 40,000 USD job
      <h2>{weather?.name}</h2>
      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/* section superior */}
        <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2">{weather?.weather[0].description}</h4>
          <span className="text-4xl">
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
        <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
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
      <button onClick={handlerUnitChange} className="mt-4 bg-white text-black">
        F / c
      </button>
    </section>
  );
};
export default Weather;
