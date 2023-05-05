import React from "react";

const Navbar = ({ setDark, dark }) => {
  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDark(dark ? false : true);
  };
  return (
    <div
      className={`navbar flex fixed top-0 w-full z-20 justify-between items-center px-[16px] md:px-[80px] py-[30px] shadow-md ${
        dark ? " dark-second" : " light-second"
      }`}
    >
      <p className="font-extrabold text-sm md:text-[24px]">
        Where in the world?
      </p>
      <div
        className="mode-box flex items-center gap-[10px] cursor-pointer select-none"
        onClick={toggleDarkMode}
      >
        <img
          src={
            dark
              ? "./images/dark-mode-icon.png"
              : "./images/light-mode-icon.png"
          }
          alt=""
        />
        <p className="font-semibold text-[12px]">Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
