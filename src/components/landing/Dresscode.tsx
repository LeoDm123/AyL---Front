import { Grid, Typography, Container, Button } from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/dresscode.png";
import DressMale from "../../assets/imgs/dressHombre.jpg";
import DressFemale from "../../assets/imgs/dressMujer.jpg";

const Dresscode = () => {
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
          DRESSCODE
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          Formal día.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          ¡Te mostramos algunos modelos para que te inspires!
        </Typography>
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            href="https://ar.pinterest.com/search/pins/?q=vestimenta%20formal%20d%C3%ADa%20hombre%20casamiento&rs=typed"
            target="blank"
          >
            <img src={DressMale} alt="Event Icon" className="dress-img" />
          </Button>
          <Button
            href="https://ar.pinterest.com/search/pins/?q=vestimenta%20formal%20d%C3%ADa%20mujer%20casamiento&rs=typed"
            target="blank"
          >
            <img src={DressFemale} alt="Event Icon" className="dress-img" />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dresscode;
