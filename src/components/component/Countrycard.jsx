import React from "react";

const Countrycard = ({ dark, common,population,region,capital,flags }) => {
  return (
    <div
      className={`w-[267px] rounded-md shadow-md ${
        dark ? " dark-second" : " light-second"
      }`}
    >
      <img
        src={flags}
        className="w-[267px] rounded-t-md "
        alt=""
      />
      <div className="infor-box px-6 py-6">
        <p className="font-extrabold pb-[16px]">{common}</p>
        <div className="boxes flex flex-col gap-[8px]">
          <p className="font-semibold text-sm">
            Population: <span className="font-light "> {population}</span>
          </p>
          <p className="font-semibold text-sm">
            Region:<span className="font-light "> {region}</span>
          </p>
          <p className="font-semibold text-sm">
            Capital: <span className="font-light "> {capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countrycard;
