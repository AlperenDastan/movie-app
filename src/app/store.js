// Importerer funktionen 'configureStore' fra Redux Toolkit biblioteket
import { configureStore } from '@reduxjs/toolkit';
// Importerer 'movieApi' fra movieSlice, som indeholder konfigurationen for film relaterede API anmodninger
import { movieApi } from '../features/movies/movieSlice';

// Eksporterer en konfigureret store, som er hjertet hvor hele applikationens tilstand opbevares
export default configureStore({
  reducer: {
    // RTK Query reducer path
    // Reducer fra RTK Query, som automatiserer behandlingen af API data. Det er et sted hvor tilstandsændringer baseret på API svar håndteres.
    [movieApi.reducerPath]: movieApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  // Middleware er funktioner, der kan gribe ind, før handlinger når reduceren. Her tilføjes RTK Query's middleware til standard middlewaren.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
