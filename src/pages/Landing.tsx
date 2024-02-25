import "../css/App.css";
import { Container } from "@mui/material";
import SliderMain from "../components/landing/SliderMain";
import Counter from "../components/landing/Counter";
import Location from "../components/landing/Location";
import { DividerTitle } from "../components/landing/Dividers";
import Dresscode from "../components/landing/Dresscode";
import Gifts from "../components/landing/Gifts";
import Bus from "../components/landing/Bus";
import Assistance from "../components/landing/Assistance";
import Closing from "../components/landing/Closing";

const Landing = () => {
  return (
    <Container sx={{ padding: 0 }}>
      <SliderMain />
      <Counter />
      <DividerTitle />
      <Location />
      <DividerTitle />
      <Dresscode />
      <DividerTitle />
      <Gifts />
      <DividerTitle />
      <Bus />
      <Assistance />
      <Closing />
    </Container>
  );
};

export default Landing;
