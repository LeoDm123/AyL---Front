import React from "react";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

export const DividerTitle: React.FC = () => {
  return (
    <Grid sx={{ paddingX: 3 }}>
      <Divider sx={{ borderColor: "#717264" }} variant="middle" />
    </Grid>
  );
};

export const DividerSecondary: React.FC = () => {
  return (
    <Grid sx={{ paddingX: 3 }}>
      <Divider
        sx={{ borderColor: "#4f5046", borderWidth: 0.3, opacity: 0.25 }}
      />
    </Grid>
  );
};
