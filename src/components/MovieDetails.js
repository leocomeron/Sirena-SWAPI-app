import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const style = {
  width: "100%",
  maxWidth: 600,
};

const Details = () => {
  const movie = useSelector((state) => state.movie);

  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary={`Título: ${movie.movie.title}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Director: ${movie.movie.director}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Productores: ${movie.movie.producer}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Fecha de lanzamiento: ${movie.movie.release_date}`}
          />
        </ListItem>
      </List>
    </div>
  );
};
export default Details;
