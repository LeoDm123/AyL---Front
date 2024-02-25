import "../css/App.css";
import { Grid, Typography, Container } from "@mui/material";

const Warning = () => {
  return (
    <Container sx={{ padding: 0 }}>
      <Grid sx={{ padding: 0, margin: 0 }}>
        <Grid
          sx={{
            width: "100%",
            color: "white",
            padding: 1,
            marginTop: 3,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{ fontFamily: "'Love Light', cursive", color: "black" }}
          >
            ¡Abel y Lou!
          </Typography>
          <Typography variant="body1" align="center" style={{ color: "black" }}>
            ¡Para una mejor experiencia abre esta aplicación en un dispositivo
            móbil!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Warning;
