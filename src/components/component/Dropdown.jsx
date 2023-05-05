import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const baseURL = "https://restcountries.com/v3.1/region/";
export default function Example({ dark, setData }) {
  const [Cregion, setCregion] = useState([]);
  React.useEffect(() => {
    axios
      .get(baseURL + Cregion)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // console.log(error.response.status);
      });
  }, [Cregion]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`inline-flex w-[200px] justify-center gap-x-1.5 rounded-md px-3 py-[14px] text-sm font-semibold hover:bg-gray-50 shadow-sm ${
            dark ? " dark-second" : " light-second"
          }`}
        >
          Filter by Region
          <ChevronDownIcon
            className="ml-auto h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute left-0 z-10 mt-2 w-[200px] origin-top-right rounded-md shadow-sm focus:outline-none ${
            dark ? " dark-second" : " light-second"
          }`}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <p
                  // href="#"
                  className={classNames(
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                  onClick={() => setCregion("Africa")}
                >
                  Africa
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    "cursor-pointer block px-4 py-2 text-sm"
                  )}
                  onClick={() => setCregion("America")}
                >
                  America
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    "cursor-pointer block px-4 py-2 text-sm"
                  )}
                  onClick={() => setCregion("Asia")}
                >
                  Asia
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    "cursor-pointer block px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => setCregion("Europe")}
                >
                  Europe
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => setCregion("Oceania")}
                >
                  Oceania
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
