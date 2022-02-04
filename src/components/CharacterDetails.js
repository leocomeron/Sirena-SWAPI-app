import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movie";
import { characterActions } from "../store/character";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LoadingCircle from "./UI/LoadingCircle";
import axios from "axios";

const style = {
  width: "100%",
  maxWidth: 400,
};
const buttonStyle = {
  paddingLeft: 6,
  "&:hover": {
    backgroundColor: "#444444",
  },
};

const DUMMY_EYESCOLOR = [
  "blue",
  "yellow",
  "red",
  "brown",
  "blue-gray",
  "black",
  "orange",
  "hazel",
  "pink",
  "unknown",
  "red, blue",
  "gold",
  "green, yellow",
  "white",
];

const DUMMY_EYESCOLOR_SPANISH = [
  "azul",
  "amarillo",
  "rojo",
  "marron",
  "azul-gris",
  "negro",
  "naranja",
  "almendra",
  "rosado",
  "desconocido",
  "rojo, azul",
  "dorado",
  "verde, amarillo",
  "blanco",
];

const Details = () => {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let allTitles = [];

  useEffect(() => {
    character.character.films.map((film) => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(film)
          .then(function (response) {
            allTitles = [...allTitles, response.data];
            setData(allTitles);
          })
          .catch(function (error) {
            console.log(error);
          });
        setIsLoading(false);
      };
      fetchData();
    });
  }, [character]);

  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary={`Nombre: ${character.character.name}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Color de ojos: ${
              DUMMY_EYESCOLOR_SPANISH[
                DUMMY_EYESCOLOR.indexOf(character.character.eye_color)
              ]
            }`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Altura: ${character.character.height} cm`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Peso: ${character.character.mass} kg`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Peliculas en las que apareció:" />
        </ListItem>
        {isLoading && <LoadingCircle />}
        {!isLoading &&
          data.map((item, i) => {
            return (
              <div key={i}>
                <ListItem
                  sx={buttonStyle}
                  button
                  onClick={function () {
                    dispatch(movieActions.selectMovie(item));
                    dispatch(characterActions.selectCharacter(null));
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              </div>
            );
          })}
      </List>
    </div>
  );
};
export default Details;
