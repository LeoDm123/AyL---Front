import { Grid, Typography, Container, Divider, Button } from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/rings.png";

const Location = () => {
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
          CEREMONIA & CELEBRACIÓN
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 2 }}
          style={{ color: "#717264" }}
        >
          La Casona de Tafí Viejo
        </Typography>
        <Typography variant="body2" align="center" style={{ color: "#717264" }}>
          Te esperamos el
        </Typography>
        <Grid className="date-hour-container">
          <Typography variant="h5" align="center" style={{ color: "#4f5046" }}>
            31 AGO
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ borderColor: "#4f5046", borderWidth: 0.3, opacity: 0.5 }}
            flexItem
          />
          <Typography variant="h5" align="center" style={{ color: "#4f5046" }}>
            18:00 h.
          </Typography>
        </Grid>
        <Typography variant="body2" style={{ color: "#717264" }}>
          Av. Constitución 4000 - Tafí Viejo
        </Typography>
        <Typography variant="body2" style={{ color: "#717264" }}>
          San Miguel de Tucumán - Tucumán
        </Typography>
        <Grid>
          <Button variant="contained" className="button">
            Ver Ubicación
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Location;
