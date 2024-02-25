import "../css/App.css";
import { Grid, Typography, Container } from "@mui/material";

const Warning = () => {
  return (
    <Container sx={{ padding: 0 }}>
      <Grid sx={{ padding: 0, margin: 0 }}>
        <Grid
          sx={{
            position: "absolute",
            top: "25%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: 1,
            margin: 0,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{ fontFamily: "'Love Light', cursive" }}
          >
            ¡Abel y Lou!
          </Typography>
          <Typography variant="body1" align="center">
            ¡Para una mejor experiencia abre esta aplicación en un dispositivo
            móbil!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Warning;
