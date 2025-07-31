import { useEffect, useState } from "react";

const LAT = 35.68; // 東京
const LON = 139.76;

export default function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=Asia%2FTokyo`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data.current));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>東京の天気</h1>
      {weather ? (
        <ul>
          <li>気温: {weather.temperature_2m} ℃</li>
          <li>湿度: {weather.relative_humidity_2m} %</li>
          <li>風速: {weather.wind_speed_10m} m/s</li>
          <li>時刻: {weather.time}</li>
        </ul>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}
