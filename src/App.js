import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import {
  fetchWeatherByQuery,
  fetchWeatherByLocation,
} from "./service/weather-api";
import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/SearchBar";
import Weather from "./components/Weather/Weather";
import Loader from "./components/Loader/Loader";

function App() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus("pending");

    fetchWeatherByQuery(query)
      .then((response) => {
        setWeatherInfo(response);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [query]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  }, []);

  const successLocation = (data) => {
    fetchWeatherByLocation(data.coords.latitude, data.coords.longitude)
      .then((response) => {
        setWeatherInfo(response.list[0]);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  };

  const errorLocation = (error) => console.log(error.message);

  const handleSubmit = (query) => {
    setQuery(query);
  };

  const makeNotification = (text) => {
    toast(text, {
      autoClose: 2500,
      type: "info",
      theme: "colored",
    });
  };

  return (
    <>
      <Searchbar submit={handleSubmit} makeNotification={makeNotification} />

      {status === "pending" && <Loader />}

      {status === "resolved" && <Weather weatherInfo={weatherInfo} />}

      {status === "rejected" && (
        <h1 style={{ position: "absolute", top: "150px" }}>{error.message}</h1>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
