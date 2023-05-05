import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBlok from "./components/SearchBlok";

const Primary = ({ setDark, dark, setData, setSingleData }) => {
  return (
    <div className="pt-20">
      <Navbar setDark={setDark} dark={dark}></Navbar>
      <SearchBlok
        setData={setData}
        setSingleData={setSingleData}
        dark={dark}
      ></SearchBlok>
      <Outlet context={dark}></Outlet>
    </div>
  );
};

export default Primary;
