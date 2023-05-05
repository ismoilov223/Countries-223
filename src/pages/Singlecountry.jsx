import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const baseURL = "https://restcountries.com/v3.1/name/";
const Singlecountry = ({ dark, singleData, setSingleData }) => {
  const [Cname, setCname] = useState([]);
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
  console.log(singleData);
  return (
    <div
      className={`contan w-full h-full py-[40px] px-[28px] md:py-[80] md:px-[80px] ${
        dark ? "dark" : "light"
      }`}
    >
      <Link to={"/"} onClick={() => setSingleData([])}>
        <div
          className={`w-[104px] back-box rounded-sm shadow-lg py-[6px] px-6 flex items-center gap-2 ${
            dark ? "dark-second" : "light-second"
          }`}
        >
          <img
            src={
              dark
                ? "./images/back-icon-dark.png"
                : "./images/back-icon-light.png"
            }
            alt=""
          />
          <p className="text-[14px] font-light md:text-[16px] select-none cursor-pointer">
            Back
          </p>
        </div>
      </Link>

      {singleData.length != 0 ? (
        <div className="country-cont bg-transparent w-full flex flex-col gap-11 md:flex-row md:gap-[140px] pt-[64px] md:pt-[80px]">
          <div className="flag-box">
            <img
              src={singleData.flags ? singleData.flags.png : null}
              className="!w-[320px] md:!w-[560px] rounded-xl"
              alt=""
            />
          </div>
          <div className="information-cont w-full">
            <div className="informat-row flex flex-col md:flex-row gap-[120px] w-full">
              <div className="country-name-box">
                <h1 className="text-[22px] font-extrabold md:text-[32px] pb-[16px]">
                  {singleData.name ? singleData.name.common : null}
                </h1>
                <div className="text-box flex flex-col gap-[16px]">
                  <p className="font-normal text-[14px] md:text-[16px]">
                    Native Name:{" "}
                    {singleData.name ? singleData.name.common : null}
                  </p>
                  <p className="font-normal text-[14px] md:text-[16px]">
                    Population: {singleData.population}
                  </p>
                  <p className="font-normal text-[14px] md:text-[16px]">
                    Region: {singleData.region}
                  </p>
                  <p className="font-normal text-[14px] md:text-[16px]">
                    Sub Region: {singleData.subregion}
                  </p>
                  <p className="font-normal text-[14px] md:text-[16px]">
                    Capital: {singleData.capital}
                  </p>
                </div>
              </div>
              <div className="lang-box flex flex-col gap-[16px] mt-[32px] md:pt-[60px] md:mt-0">
                <p className="font-normal text-[14px] md:text-[16px]">
                  Top Level Domain: {singleData.tld ? singleData.tld[0] : null}
                </p>
                <p className="font-normal text-[14px] md:text-[16px]">
                  Currencies:{" "}
                  {singleData.currencies ? singleData.currencies[0] : null}
                </p>
                <p className="font-normal text-[14px] md:text-[16px]">
                  Languages:{" "}
                  {singleData.languages ? singleData.languages.eng : null}
                </p>
              </div>
            </div>
            <div className="border-row mt-[32px] md:mt-[70px]">
              <h1 className="font-semibold text-[16px] flex flex-col md:flex-row md:items-center gap-[16px]">
                Border Countries:
                <div className="btn-box flex items-center gap-3">
                  {singleData.borders?.map((border) => (
                    <button
                      key={border}
                      className={`w-[96px] py-1 shadow-lg rounded-[2px] font-light ${
                        dark ? "dark-second" : "light-second"
                      }`}
                      onClick={() => setCname(border)}
                    >
                      {border}
                    </button>
                  ))}
                </div>
              </h1>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Singlecountry;
