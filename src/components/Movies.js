import { useEffect, useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movie";
import LoadingCircle from "./UI/LoadingCircle";
import SearchBar from "./UI/SearchBar";
import axios from "axios";

const style = {
  width: "100%",
  maxWidth: 300,
  minWidth: 100,
};
const buttonStyle = {
  "&:hover": {
    backgroundColor: "#444444",
  },
};

const Names = () => {
  const category = useSelector((state) => state.category);
  const movie = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [enteredSearch, setEnteredSearch] = useState("");

  const searchInputHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  let page = `https://swapi.dev/api/films/`;

  console.log(movie);
  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(page)
      .then(function (response) {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <Fragment>
      {isLoading && <LoadingCircle />}
      {!isLoading && (
        <List sx={style} component="nav" aria-label="mailbox folders">
          <SearchBar
            enteredSearch={enteredSearch}
            searchInputHandler={searchInputHandler}
          />
          {data.map((film, i) => {
            let isMatching = film.title
              .toLowerCase()
              .includes(enteredSearch.toLowerCase());
            return (
              isMatching && (
                <div key={i}>
                  <ListItem
                    button
                    sx={buttonStyle}
                    onClick={function () {
                      dispatch(movieActions.selectMovie(film));
                    }}
                  >
                    <ListItemText primary={film.title} />
                    {movie.movie === film && <ArrowRightIcon />}
                  </ListItem>
                  <Divider />
                </div>
              )
            );
          })}
        </List>
      )}
    </Fragment>
  );
};

export default Names;
