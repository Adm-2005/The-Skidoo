"use client";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { IoMdOptions } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setResults([]);
      return;
    }

    const fetchLocations = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api?q=${debouncedQuery}`);
        const data = await response.json();
        setResults(data.locations);
      } catch (error) {
        console.log("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <form className="flex bg-[#F2F2F2] p-2 rounded-xl">
        <IconContext.Provider value={{ size: '35px', className: 'relative left-0' }}>
            <IoSearch />
        </IconContext.Provider>
        <input
          id="search"
          className="bg-transparent w-full focus:outline-none"
          type="text"
          placeholder="Search for places"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconContext.Provider value={{ size: "35px", className: "relative right-0" }}>
          <IoMdOptions />
        </IconContext.Provider>
      </form>

      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full shadow-lg">
          {results.map((location, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
