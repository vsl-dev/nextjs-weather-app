import { config } from "../../../config";

export default async function search(req, res) {
  const query = req.query.q;
  const request = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${config.apiKey}&q=${query}`
  );
  const data = await request.json();
  res.send(data);
}
