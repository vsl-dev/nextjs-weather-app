import Search from "../components/search";
import Weather from "../components/weather";
const apiKey = "ff9b41622f994b1287a73535210809";

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

export async function getServerSideProps() {
  const clientInfo = await fetch("https://geolocation-db.com/json/");
  const clientInfoJson = await clientInfo.json();
  const data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${clientInfoJson.city}&days=7`
  );
  const weather = await data.json();
  return {
    props: {
      weather,
    },
  };
}
