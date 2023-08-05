/* informacion y estructura del clima */

const Weather = ({ weather }) => {
  console.log({ weather });
  return (
    <section className="text-center">
      I will get a 40,000 USD job
      <h2>{weather?.name}</h2>
      <section>
        {/* section superior */}
        <section className="bg-white/60 p-2 rounded-2xl">
          <h4>{weather?.weather[0].description}</h4>
          <span>{weather?.main.temp}°K</span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>
        {/* section inferior */}
        <section className="bg-white/60 p-2 rounded-2xl">
          <article>
            <div>
              <img src={"/images/wind.png"} alt="" />
            </div>
            <span>{weather?.wind.speed} m/s</span>
          </article>
          <article>
            <div>
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weather?.main.humidity}%</span>
          </article>
          <article>
            <div>
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span>{weather?.main.pressure} hPa</span>
          </article>
        </section>
      </section>
    </section>
  );
};
export default Weather;
