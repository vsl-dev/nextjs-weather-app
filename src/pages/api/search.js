export default async function search(req, res) {
  const query = req.query.q
  const request = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=ff9b41622f994b1287a73535210809&q=${query}`
  );
  const data = await request.json()
  res.send(data);
}
