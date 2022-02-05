import { useSelector } from "react-redux";
import { Fragment } from "react";
import "./App.css";
import Category from "./components/Category";
import Details from "./components/CharacterDetails";
import Characters from "./components/Characters";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    "@media and screen (max-width: 600px)": {
      fontSize: 6,
    },
    fontSize: 8,
  },
});

function App() {
  const category = useSelector((state) => state.category);
  const character = useSelector((state) => state.character);
  const movie = useSelector((state) => state.movie);

  return (
    <Fragment>
      <div className="title">Hola fanáticos de StarWars</div>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Category />
          {category.category === "people" && <Characters />}
          {category.category === "films" && <Movies />}
          {character.character !== null && <Details />}
          {movie.movie !== null && <MovieDetails />}
        </ThemeProvider>
      </div>
      <img
        src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG3.png"
        alt="Star Wars Icon"
        className="img"
      ></img>
    </Fragment>
  );
}

export default App;
