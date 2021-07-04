import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieList() {
  const [movies] = useContext(MovieContext);
  return (
    <div style={{ height: "100px", width: "100%", backgroundColor: "blue" }}>
      <h1>Total Movies: {movies.length}</h1>
    </div>
  );
}
