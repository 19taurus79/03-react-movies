import { useEffect, useState } from "react";

import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";

export default function App() {
  const [query, setQuery] = useState("");
  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  console.log("Search submitted from App:", query);
  useEffect(() => {
    fetchMovies({ query })
      .then((response) => {
        console.log("Movies fetched:", response);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [query]);
  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
    </>
  );
}
