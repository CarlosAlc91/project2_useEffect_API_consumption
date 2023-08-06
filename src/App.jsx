import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  /* estado */
  const [weather, setWeather] = useState(null);

  /* obtener long and lat */

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const API_KEY = "8b347c22d8ba681af6bc0e53cbf63b65";

    /* creacion de url */
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  const handlerCitySearch = (cityName) => {
    const API_KEY = "8b347c22d8ba681af6bc0e53cbf63b65";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  /* arreglo vacio para que solo dse ejecute en el primer render y naada mas */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className="bg-bg1 bg-center bg-cover min-h-screen text-white font-lato flex justify-center items-center px-4">
      <Weather weather={weather} onCitySearch={handlerCitySearch} />
    </main>
  );
}

export default App;
