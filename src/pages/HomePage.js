import { Grid, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>
          This is a very important application that represents the data from the
          Star Wars films.
        </Typography>
      </Grid>
    </Grid>
  );
};
