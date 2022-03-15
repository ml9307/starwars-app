import { Grid, Typography } from "@mui/material";
import React from "react";
import { FilmList } from "../modules/films/FilmList";

export const FilmsPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Films</Typography>
      </Grid>
      <Grid item xs={12}>
        <FilmList />
      </Grid>
    </Grid>
  );
};
