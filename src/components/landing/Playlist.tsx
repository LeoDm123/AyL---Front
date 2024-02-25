import { Grid, Typography, Container, Button } from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/playlist.png";

const Playlist = () => {
  return (
    <Container sx={{ padding: 2 }}>
      <Grid className="location-container">
        <img src={EventIcon} alt="Event Icon" className="event-icon" />
        <Typography
          variant="h5"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#4f5046" }}
        >
          MÚSICA
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          ¡Ayudanos a armar la playlist de nuestro casamiento!
        </Typography>
        <Button variant="contained" className="button">
          Recomendar Música
        </Button>
      </Grid>
    </Container>
  );
};

export default Playlist;
