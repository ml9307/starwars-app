import { useQuery } from "@apollo/client";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GET_ALL_FILMS } from "./queries";

export const FilmList = () => {
  const { data, error, loading } = useQuery(GET_ALL_FILMS);

  if (error) return <Typography variant="h5">{error.message}</Typography>;

  if (loading) return <Typography variant="body1">Loading...</Typography>;

  const films = data.allFilms.films;

  return (
    <Grid container spacing={2}>
      {films.map((film, i) => (
        <Grid item key={i} xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h4">{film.title}</Typography>
              <Typography variant="subtitle">
                Release Date: {film.releaseDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/films/${film.id}`}>More info</Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
