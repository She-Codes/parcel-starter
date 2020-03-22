import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '7ac846b1627ac681186c50292ce4d755';

const fetchWeatherData = async () => {
  const data = await axios.get(
    `${baseUrl}?zip=23225&units=imperial&appid=${apiKey}`
  );
  console.log(data);
};

fetchWeatherData();
