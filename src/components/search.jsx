import { useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Search() {
  const [query, search] = useState("");
  const router = useRouter();
  const { data } = useSWR(`/api/search?q=${router.query.q}`, fetcher);

  const handleSearch = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/",
      query: { q: query, city: router.query.city ?? "" },
    });
    console.log(data);
  };

  return (
    <div className="bg-white w-4/5 p-3 mt-3 rounded-lg">
      <h1 className="font-nunito p-1 text-xl text-black font-bold">
        Weather App
      </h1>
      <div class="pt-2 relative mx-auto text-gray-600">
        <form onSubmit={handleSearch}>
          <div class="pt-2 relative mx-auto text-gray-600">
            <input
              value={query}
              onChange={(e) => search(e.target.value)}
              className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="text"
              placeholder="Search city or country..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      {router.query.q ? (
        data?.length > 1 ? (
          <div className="w-full border-2 border-gray-300 bg-white px-5 pr-16 rounded-lg text-sm mt-3">
            {data ? (
              data?.map((x) => (
                <div key={x.id} className="w-full p-1 cursor-pointer">
                  <Link href={{ pathname: "/", query: { city: x.name } }}>
                    <a>
                      {x.name}, {x.country}
                    </a>
                  </Link>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div className="w-full border-2 border-gray-300 bg-white px-5 pr-16 rounded-lg text-sm mt-3">
            <h3 className="w-full p-3">No results for &ldquo;{router.query.q}&ldquo;</h3>
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}
