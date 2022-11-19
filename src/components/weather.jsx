import Image from "next/image";
import moment from "moment";

export default function Weather(props) {
  const w = props.data;

  if (w.error) {
    return (
      <>
        <div className="w-4/5 md:flex flex-row">
          <div className="bg-white p-3 mt-3 rounded-lg mr-1 w-full">
            <h3 className="px-3 text-gray-600 font-bold p-1">
              Error:{" "}
              <span className="font-normal text-gray-400 text-xs">
                {w.error.code}
              </span>
            </h3>
            <p className="px-3 font-bold p-1">{w.error.message}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-4/5 md:flex flex-row">
          <div className="bg-white p-3 mt-3 rounded-lg mr-1 w-full md:w-2/6">
            <h3 className="px-3 text-gray-600 font-bold p-1">
              Today{" "}
              <span className="font-normal text-gray-400 text-xs">
                (
                {moment
                  .unix(props.data.location.localtime_epoch)
                  .format("DD/MM/YYYY")}
                )
              </span>
            </h3>
            <div className="w-full p-3 flex items-center">
              <div className="flex-1">
                <h3 className="p-1 text-gray-600">
                  {w.location.name}, {w.location.country}
                </h3>
                <h3 className="p-1 font-bold text-4xl">{w.current.temp_c}°C</h3>
                <h3 className="p-1 text-gray-600">
                  {w.current.condition.text}
                </h3>
              </div>
              <div className="w-24">
                <Image
                  src={"http:" + w.current.condition.icon}
                  width={65 + "px"}
                  height={65 + "px"}
                  alt="Icon"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="mx-3">
                <h3 className="text-lg text-gray-800 font-bold">Feels Like</h3>
                <h3 className="font-bold text-gray-600 p-3">
                  {w.current.feelslike_c}°C
                </h3>
              </div>
              <div className="mx-3">
                <h3 className="text-lg text-gray-800 font-bold">Wind Speed</h3>
                <h3 className="font-bold text-gray-600">
                  {w.current.wind_kph} km/h
                </h3>
              </div>
              <div className="mx-3">
                <h3 className="text-lg text-gray-800 font-bold">Humidity</h3>
                <h3 className="font-bold text-gray-600">
                  {w.current.humidity}%
                </h3>
              </div>
              <div className="mx-3">
                <h3 className="text-lg text-gray-800 font-bold">Cloud</h3>
                <h3 className="font-bold text-gray-600">{w.current.cloud}%</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 mt-3 rounded-lg  md:max-h-44 md:w-5/6 md:ml-1">
            <div className="flex">
              {w.forecast.forecastday ? (
                w.forecast.forecastday?.slice(1).map((x) => (
                  <div
                    key={x.date.date_epoch}
                    className="w-1/2 h-36 p-1 m-1 first:border-r border-gray-300"
                  >
                    <h3 className="text-gray-600 p-1">
                      {x.date.split("-")[2] +
                        "/" +
                        x.date.split("-")[1] +
                        "/" +
                        x.date.split("-")[0]}
                    </h3>
                    <div className="flex items-center mt-3">
                      <div className="flex-1">
                        <h3 className="p-1 font-bold text-3xl md:text-4xl">
                          {x.day.maxtemp_c}°C
                        </h3>
                        <h3 className="p-1 text-gray-600">
                          {x.day.condition.text}
                        </h3>
                      </div>
                      <div className="max-[520px]:hidden w-24">
                        <Image
                          src={"http:" + x.day.condition.icon}
                          width={65 + "px"}
                          height={65 + "px"}
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
