import { useState, useEffect } from "react";
import { Grid, Typography, Container } from "@mui/material";
import "../../css/App.css";

const Countdown: React.FC<{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}> = ({ days, hours, minutes, seconds }) => {
  return (
    <Grid container className="counter-container">
      <Grid item className="counter-subcontainer">
        <Grid item className="counter-number">
          <Typography variant="body1" style={{ color: "#fff" }}>
            {days}
          </Typography>
        </Grid>
        <Typography variant="caption" style={{ color: "#4f5046" }}>
          DÍAS
        </Typography>
      </Grid>
      <Grid item className="counter-subcontainer">
        <Grid item className="counter-number">
          <Typography variant="body1" style={{ color: "#fff" }}>
            {hours}
          </Typography>
        </Grid>
        <Typography variant="caption" style={{ color: "#4f5046" }}>
          HS.
        </Typography>
      </Grid>
      <Grid item className="counter-subcontainer">
        <Grid item className="counter-number">
          <Typography variant="body1" style={{ color: "#fff" }}>
            {minutes}
          </Typography>
        </Grid>
        <Typography variant="caption" style={{ color: "#4f5046" }}>
          MIN.
        </Typography>
      </Grid>
      <Grid item className="counter-subcontainer">
        <Grid item className="counter-number">
          <Typography variant="body1" style={{ color: "#fff" }}>
            {seconds}
          </Typography>
        </Grid>
        <Typography variant="caption" style={{ color: "#4f5046" }}>
          SEG.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Counter = () => {
  const countdownDate = new Date("August 31, 2024 09:00:00").getTime();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const gap = countdownDate - now;

      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  return (
    <Container sx={{ padding: 2 }}>
      <Grid>
        <Typography
          variant="h3"
          align="center"
          style={{ fontFamily: "'Love Light', cursive", color: "#4f5046" }}
        >
          ¡Estás Invitado!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ color: "#717264" }}
          sx={{ marginY: 1 }}
        >
          ¡Queremos que seas parte de este momento tan especial!
        </Typography>
        <Countdown
          days={countdown.days}
          hours={countdown.hours}
          minutes={countdown.minutes}
          seconds={countdown.seconds}
        />
      </Grid>
    </Container>
  );
};

export default Counter;
