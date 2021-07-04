import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Iron Man",
      year: 2014
    },
    {
      name: "Spider Man",
      year: 2018
    }
  ]);
  return (
    <>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
};
