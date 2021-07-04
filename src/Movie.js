import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Movie() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <>
          <h1>{movie.name}</h1>
          <h3>{movie.year}</h3>
        </>
      ))}
    </div>
  );
}
