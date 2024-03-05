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
  TextField,
} from "@mui/material";
import "../../css/App.css";
import EventIcon from "../../assets/icons/menu.png";

const Menu = () => {
  const [menu, setMenu] = React.useState("");
  const [alergies, setAlergies] = React.useState("");

  const handleMenuChange = (event: SelectChangeEvent) => {
    setMenu(event.target.value as string);
  };
  const handleAlergiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlergies(event.target.value as string);
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
          ELEGÍ TU MENÚ
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          Como la comida es una parte importante, <br /> ¡Queremos que estes a
          gusto con ella!.
        </Typography>
        <FormControl sx={{ width: "100%", margin: 2 }} size="small">
          <InputLabel>¿Tenés alguna preferencia?</InputLabel>
          <Select value={menu} label="Transporte" onChange={handleMenuChange}>
            <MenuItem value={"Vegetariano"}>Vegetariano</MenuItem>
            <MenuItem value={"Vegano"}>Vegano</MenuItem>
            <MenuItem value={"Celíaco"}>Celíaco</MenuItem>
            <MenuItem value={"De todo"}>Como de todo</MenuItem>
          </Select>
          <TextField
            label="¿Alguna alergia?"
            variant="outlined"
            size="small"
            value={alergies}
            sx={{ marginTop: 1 }}
            onChange={handleAlergiesChange}
          />
        </FormControl>
      </Grid>
    </Container>
  );
};

export default Menu;
