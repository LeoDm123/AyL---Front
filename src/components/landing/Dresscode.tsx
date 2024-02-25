import { Grid, Typography, Container } from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/dresscode.png";

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
          ¡Como te sientas más cómodo!
        </Typography>
      </Grid>
    </Container>
  );
};

export default Dresscode;
