const API_KEY = "581760d7491342a48aea621446330422";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherByQuery(query) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`
  );

  if (response.ok) {
    return response.json();
  }

  return await Promise.reject(new Error(`No results`));
}

export async function fetchWeatherByLocation(lat, lon) {
  const response = await fetch(
    `${BASE_URL}/find?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (response.ok) {
    return response.json();
  }

  return await Promise.reject(new Error(`No results`));
}
