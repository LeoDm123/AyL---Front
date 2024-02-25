import * as React from "react";
import {
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/bus.png";

const Bus = () => {
  const [need, setNeed] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setNeed(event.target.value as string);
  };

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
          ¿NECESITAS TRASLADO?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          ¡Queremos que solo te preocupes de pasarla bien! <br /> Asi que tenes
          a disposición traslado para ir y volver.
        </Typography>
        <FormControl sx={{ width: "45%", margin: 2 }} size="small">
          <InputLabel>¿Transporte?</InputLabel>
          <Select value={need} label="Transporte" onChange={handleChange}>
            <MenuItem value={"NO"}>NO</MenuItem>
            <MenuItem value={"SI"}>SI</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Container>
  );
};

export default Bus;
