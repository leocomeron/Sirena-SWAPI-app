import { useSelector } from "react-redux";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const style = {
  width: "100%",
  maxWidth: 600,
  minWidth: 120,
};

const Details = () => {
  const movie = useSelector((state) => state.movie);

  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {`Título: ${movie.movie.title}`}
              </Typography>
            }
          />
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
