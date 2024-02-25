import "../../css/App.css";
import { Grid, Typography, Container } from "@mui/material";
import Photo from "../../assets/imgs/AbelyLu.jpg";

const SliderMain = () => {
  return (
    <Container sx={{ padding: 0 }}>
      <Grid sx={{ padding: 0, margin: 0 }}>
        <img className="main-img" src={Photo} />
        <Grid
          sx={{
            position: "absolute",
            top: "30%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
            variant="h2"
            align="center"
            style={{ fontFamily: "'Love Light', cursive" }}
          >
            ¡Abel y Lou!
          </Typography>
          <Typography variant="h6" align="center">
            ¡NOS CASAMOS!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SliderMain;
