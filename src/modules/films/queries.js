import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query GET_ALL_FILMS {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`;

export const GET_FILM_DETAIL = gql`
  query GET_FILM_DETAIL($filmId: ID) {
    film(id: $filmId) {
      director
      openingCrawl
      title
      producers
      planetConnection {
        planets {
          id
          name
          diameter
        }
      }
    }
  }
`;
