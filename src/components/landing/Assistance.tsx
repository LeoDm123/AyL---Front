import * as React from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import "../../css/App.css";

const Assistance = () => {
  const [name, setName] = React.useState("");
  const [assistance, setAssistance] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAssistanceChange = (event: SelectChangeEvent) => {
    setAssistance(event.target.value as string);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Grid className="location-container">
        <Typography
          variant="h5"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#4f5046" }}
        >
          CONFIRMAR ASISTENCIA
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ padding: 1 }}
          style={{ color: "#717264" }}
        >
          Por favor, confirmanos tu asistencia.
        </Typography>
        <FormControl fullWidth>
          <TextField
            label="Nombre y Apellido"
            variant="outlined"
            size="small"
            value={name}
            sx={{ marginTop: 1 }}
            onChange={handleNameChange}
          />
          <FormControl size="small" sx={{ marginTop: 1 }}>
            <InputLabel>¿Asistiras?</InputLabel>
            <Select
              value={assistance}
              label="¿Asistiras?"
              onChange={handleAssistanceChange}
            >
              <MenuItem value={"SI"}>SI</MenuItem>
              <MenuItem value={"NO"}>NO</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Escribe tu mensaje"
            variant="outlined"
            size="small"
            value={message}
            multiline
            sx={{ marginTop: 1 }}
            onChange={handleMessageChange}
          />
        </FormControl>
        <Button variant="contained" className="button">
          Enviar Respuesta
        </Button>
      </Grid>
    </Container>
  );
};

export default Assistance;
