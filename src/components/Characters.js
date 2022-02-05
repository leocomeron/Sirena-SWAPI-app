import { useEffect, useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../store/character";
import { movieActions } from "../store/movie";
import LoadingCircle from "./UI/LoadingCircle";
import SearchBar from "./UI/SearchBar";

import axios from "axios";

const style = {
  width: "100%",
  maxWidth: 300,
  minWidth: 100,
  maxHeight: 500,
  overflow: "auto",
};
const buttonStyle = {
  "&:hover": {
    backgroundColor: "#444444",
  },
};

const Characters = () => {
  const category = useSelector((state) => state.category);
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredSearch, setEnteredSearch] = useState("");

  const searchInputHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  let page = `https://swapi.dev/api/people/`;
  let allCharacters = [];

  const fetchData = async () => {
    setIsLoading(true);
    while (page !== null) {
      await axios
        .get(page)
        .then(function (response) {
          allCharacters = allCharacters.concat(response.data.results);
          setData(allCharacters);
          page = response.data["next"];
          console.log(allCharacters);
        })
        .catch(function (error) {
          console.log(error);
        });
      if (page == null) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  // CREATE AN ARRAY OF UNIQUE EYES COLOR, THEN I USED IT IN CharacterDetails.js, to translate eyes color to spanish//
  //  let eyesColor = [];
  // const character = useSelector((state) => state.character);
  // data.map((character) => {
  //   eyesColor = [...eyesColor, character.eye_color];
  // });
  // const uniqueEyesColor = eyesColor.filter((x, i, a) => a.indexOf(x) === i);

  return (
    <Fragment>
      {isLoading && <LoadingCircle />}
      {!isLoading && (
        <List sx={style} component="nav" aria-label="mailbox folders">
          <SearchBar
            enteredSearch={enteredSearch}
            searchInputHandler={searchInputHandler}
          />
          {data.map((person, i) => {
            let isMatching = person.name
              .toLowerCase()
              .includes(enteredSearch.toLowerCase());
            return (
              isMatching && (
                <div key={i}>
                  <ListItem
                    button
                    sx={buttonStyle}
                    onClick={function () {
                      dispatch(characterActions.selectCharacter(person));
                      dispatch(movieActions.selectMovie(null));
                    }}
                  >
                    <ListItemText primary={person.name} />
                    {character.character === person && <ArrowRightIcon />}
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

export default Characters;
