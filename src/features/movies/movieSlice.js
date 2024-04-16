// Importerer nødvendige funktioner fra Redux Toolkit Query pakken til at oprette API'er og udføre basale fetch-anmodninger.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Opretter en ny API-service ved navn 'movieApi' ved brug af 'createApi' funktionen fra RTK Query
export const movieApi = createApi({
    // Angiver en unik identifikator for reduceren i Redux state træet, hvilket er nødvendigt for korrekt caching og tilstandshåndtering
  reducerPath: 'movieApi',
  // Definerer grundlaget for netværksanmodninger; sætter basis-URL for alle anmodninger til TMDB's API
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  // Definerer de forskellige endepunkter (operationer), som API'en skal understøtte
  endpoints: (builder) => ({
    // Definerer et query-endepunkt til at hente populære film
    getMovies: builder.query({
        // Anvender en funktion, der returnerer en streng, som repræsenterer URL-stien til den ønskede ressource
        query: () => `movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    }),
    // Definerer et query-endepunkt til at hente detaljer om en specifik film
    getMovieDetails: builder.query({
        // Anvender en funktion, der tager en film-id og returnerer URL-stien for at hente detaljerede oplysninger om den film
        query: (id) => `movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&append_to_response=credits`
    }),
    // Definerer et query-endepunkt til at søge efter film baseret på en søgestreng
    searchMovies: builder.query({
        // Anvender en funktion, der tager en søgestreng og returnerer URL-stien, der inkluderer søgeordene
        query: (query) => `search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${encodeURIComponent(query)}`
    }),
}),
});

// Eksporterer auto-genererede hooks fra 'movieApi', så de kan bruges i React-komponenter til at hente data uden at skrive ekstra boilerplate-kode
export const { useGetMoviesQuery, useGetMovieDetailsQuery, useSearchMoviesQuery } = movieApi;
