import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../store/category";
import { movieActions } from "../store/movie";
import { characterActions } from "../store/character";

const style = {
  width: "20%",
  maxWidth: 360,
  minWidth: 100,
  fontWeight: 20,
};
const buttonStyle = {
  "&:hover": {
    backgroundColor: "#444444",
  },
};

const Sidebar = () => {
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem
        button
        sx={buttonStyle}
        onClick={function () {
          dispatch(categoryActions.selectCategory("people"));
          dispatch(movieActions.selectMovie(null));
        }}
      >
        <ListItemText primary="Personajes" />
      </ListItem>
      <Divider />
      <ListItem
        button
        sx={buttonStyle}
        divider
        onClick={function () {
          dispatch(categoryActions.selectCategory("films"));
          dispatch(characterActions.selectCharacter(null));
          dispatch(movieActions.selectMovie(null));
        }}
      >
        <ListItemText primary="Películas" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
