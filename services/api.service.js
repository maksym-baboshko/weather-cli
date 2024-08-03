export const getWeather = async (config) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  const { city, token } = config;

  url.searchParams.append("q", city);
  url.searchParams.append("appid", token);
  url.searchParams.append("units", "metric");

  try {
    const response = await fetch(url);

    if (response.status === 404) {
      throw new Error(
        `${city} not found. Try to specify the correct city name using -c [CITY_NAME]`
      );
    } else if (response.status === 401) {
      throw new Error(`Invalid API key. Set the correct key using -t [API_KEY]`);
    } else if (!response.ok) {
      throw new Error(`Couldn't fetch the weather data. Status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getWeatherIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};
