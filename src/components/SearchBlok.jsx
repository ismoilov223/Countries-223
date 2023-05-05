import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./component/Dropdown";
const baseURL = "https://restcountries.com/v3.1/name/";
const SearchBlok = ({ dark, setData, setSingleData }) => {
  const [Cname, setCname] = useState([]);
  const [message, setMessage] = useState("");
  React.useEffect(() => {
    axios
      .get(baseURL + Cname)
      .then((response) => {
        setSingleData(response.data[0]);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, [Cname]);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleKey = (event) => {
    if (event.key == "Enter") {
      setCname(message);
      event.target.value = "";
    }
  };
  return (
    <div className="search-row flex flex-col justify-start gap-[40px] pt-[24px] pb-[32px] md:py-[48px] md:flex-row md:justify-between md:items-center px-4 md:px-20">
      <div
        className={`search-box max-w-[343px] md:w-[480px] rounded-md py-[18px] pl-8 pr-2 flex items-center gap-6 ${
          dark ? "dark-second" : "light-second"
        }`}
      >
        <Link to={"/single"}>
          <img
            src={
              dark
                ? "./images/search-icon-dark.png"
                : "./images/search-icon-light.png"
            }
            alt=""
            className="cursor-pointer"
          />
        </Link>
        <Link to={"/single"}>
          <input
            type="text"
            className="outline-none w-full bg-transparent"
            placeholder="Search for a country…"
            onKeyDown={handleKey}
            onChange={handleChange}
          />
        </Link>
      </div>
      <Dropdown setData={setData} dark={dark}></Dropdown>
    </div>
  );
};

export default SearchBlok;
