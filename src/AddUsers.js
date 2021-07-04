import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddUsers() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const handleinput = (e) => {
    setName(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setMovies((prevMovie) => [...prevMovie, { name, year }]);
  };
  return (
    <form onSubmit={handleForm}>
      <input type="text" name="name" value={name} onChange={handleinput} />
      <input type="number" name="yeear" value={year} onChange={handleYear} />
      <button>Add</button>
    </form>
  );
}

export default AddUsers;
