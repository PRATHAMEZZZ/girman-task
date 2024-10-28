import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataContext";

const SearchPage = () => {
  const { setSearch, search } = useContext(DataContext);
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && search!=="") {
      navigate("/search");
    }
  };

  useEffect(() => {
    setSearch("");
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-1 flex justify-center items-center bg-gradient-to-b from-gray-50 to-blue-200 p-4">
      <div className="flex flex-col gap-10 w-full max-w-md"> 
        <img src="/girman-logo.svg" alt="logo" className="h-[130px] sm:h-[160px] mx-auto" />
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent transition duration-150 ease-in-out w-full"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  </div>
  

  );
};

export default SearchPage;
