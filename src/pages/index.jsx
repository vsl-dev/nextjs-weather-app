import Search from "../components/search";
import Weather from "../components/weather";
import { config } from "../../config";

export default function Home({ weather }) {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <Search />
        <Weather data={weather} />
      </div>
    </div>
  );
}

export async function getServerSideProps(req) {
  const query = req.query.city;
  if (query) {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${config.apiKey}&q=${
        query.length > 1 ? query : "Baku"
      }&days=7`
    );
    const weather = await data.json();
    return {
      props: {
        weather,
      },
    };
  } else {
    const clientInfo = await fetch("https://geolocation-db.com/json/");
    const clientInfoJson = await clientInfo.json();
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${config.apiKey}&q=${clientInfoJson.city}&days=7`
    );
    const weather = await data.json();
    return {
      props: {
        weather,
      },
    };
  }
}
