import "./styles.css";
import Movie from "./Movie";
import { MovieProvider } from "./MovieContext";
import AddUsers from "./AddUsers";
import MovieList from "./MoviesList";

export default function App() {
  return (
    <>
      <MovieProvider>
        <div className="App">
          <MovieList />
          <AddUsers />
          <Movie />
        </div>
      </MovieProvider>
    </>
  );
}
