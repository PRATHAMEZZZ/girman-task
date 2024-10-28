import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataContext";

const Header = () => {
  const { pathname } = useLocation();
  const { search, setSearch } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="px-4 py-4 sm:px-8 lg:px-[200px] flex flex-col sm:flex-row justify-between items-center border-b-2 border-gray-200 sticky top-0 bg-white">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img src={"/girman-logo.svg"} alt="logo" className="h-10" />
      </div>
      {pathname === "/search" ? (
        <input
          type="text"
          placeholder="Search..."
          className="mt-4 sm:mt-0 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent transition duration-150 ease-in-out w-full sm:w-[500px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4 sm:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-xl capitalize text-blue-500 underline"
                : "text-xl capitalize"
            }
          >
            Search
          </NavLink>
          <a
            href="https://girmantech.com"
            className="text-xl capitalize"
            target="_blank"
          >
            Website
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech"
            className="text-xl capitalize"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="text-xl capitalize"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
