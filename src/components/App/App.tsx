import { useEffect, useState } from "react";

// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import toast from "react-hot-toast";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  console.log("Search submitted from App:", query);
  useEffect(() => {
    setMovies([]); // Reset movies state on new search
    fetchMovies({ query })
      .then((response) => {
        if (response.length === 0) {
          toast.error("No movies found for your request.");
          return;
        } else {
          setMovies(response);
        }
        console.log("Movies fetched:", response);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [query]);
  console.log("Movies state updated:", movies);
  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
    </>
  );
}
