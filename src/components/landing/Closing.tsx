import { Grid, Typography, Container } from "@mui/material";
import "../../css/App.css";

const Closing = () => {
  return (
    <Container sx={{ padding: 2 }}>
      <Grid className="location-container">
        <Typography
          variant="h2"
          align="center"
          sx={{ padding: 1 }}
          style={{ fontFamily: "'Love Light', cursive", color: "#4f5046" }}
        >
          ¡Te esperamos!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ padding: 1 }}
          style={{ fontFamily: "'Alex Brush', cursive", color: "#717264" }}
        >
          Abel & Lou
        </Typography>
      </Grid>
    </Container>
  );
};

export default Closing;
