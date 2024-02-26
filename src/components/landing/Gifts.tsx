import * as React from "react";
import { Grid, Typography, Container, Button } from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/gift.png";
import BankData from "./BankData";

const Gifts = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          REGALOS
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          Lo más importante es tu presencia, <br /> pero si quieres hacernos un
          regalo,
          <br />
          aquí tienes nuestros datos.
        </Typography>
        <Button variant="contained" className="button" onClick={handleOpen}>
          Datos Bancarios
        </Button>
        <BankData open={open} handleClose={handleClose} />
      </Grid>
    </Container>
  );
};

export default Gifts;
