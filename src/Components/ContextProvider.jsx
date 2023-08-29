import { useEffect, useState } from "react";
import WeatherContext from "./Context/WeatherContext";
import { getForecastData } from "./API/axiosFetching";
// import { getSelectedDataWithinDateRange } from "./SecondaryComponents/TimeDateManipulation/TimeDateManipulation";

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [location, setLocation] = useState("Philippines");

  const [cities, setCities] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loaded, setLoaded] = useState(false);

  // const filteredDateTime = getSelectedDataWithinDateRange(dataList);

  const getWeather = async () => {
    const getAllData = await getForecastData(location);
    return getAllData;
  };

  // const getOtherCities = async (countryCode) => {
  //   const getAlldata = await getCitiesData(countryCode, limit);
  //   return getAlldata;
  // };

  // const getCountry = async (location) => {
  //   const getAlldata = await getCountryData(location);
  //   return getAlldata;
  // };

  return (
    <WeatherContext.Provider
      value={{
        getWeather,
        // getCountry,
        // getOtherCities,
        setLocation,
        setLoaded,
        setCities,
        data,
        dataList,
        location,
        loaded,
        limit,
        cities,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
