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
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-50 to-blue-200 h-[calc(100vh-4rem)] flex-col gap-10">
        <img src="/girman-logo.svg" alt="logo" className="h-[130px]" />
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent transition duration-150 ease-in-out w-[500px]"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default SearchPage;
