import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Countrycard from "../components/component/Countrycard";
const baseURL = "https://restcountries.com/v3.1/all";
const Home = ({ dark, data, setData, setSingleData }) => {
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div
      className={`px-14 pt-[32px] flex flex-col gap-[28px] md:flex-row flex-wrap md:gap-[40px] md:pt-[48px] md:px-20 ${
        dark ? " dark" : " light"
      }`}
    >
      {data.map((item, i) => (
        <Link to={"/single"} onClick={() => setSingleData(item)}>
          <Countrycard
            key={i}
            common={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flags={item.flags.png}
            dark={dark}
          ></Countrycard>
        </Link>
      ))}
    </div>
  );
};

export default Home;
