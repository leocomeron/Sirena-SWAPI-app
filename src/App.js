import { useSelector } from "react-redux";
import { Fragment } from "react";
import "./App.css";
import Category from "./components/Category";
import Details from "./components/CharacterDetails";
import Characters from "./components/Characters";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import { ThemeProvider, createTheme, styled } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 12,
    "@media (min-width:600px)": {
      fontSize: 14,
    },
  },
});

function App() {
  const category = useSelector((state) => state.category);
  const character = useSelector((state) => state.character);
  const movie = useSelector((state) => state.movie);

  return (
    <Fragment>
      <p className="title">Hola fanáticos de StarWars</p>
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
        src={"http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG3.png"}
        className="img"
      ></img>
    </Fragment>
  );
}

export default App;
