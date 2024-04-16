// Importerer React, som er nødvendigt for at skabe React-komponenter
import React from 'react';
// Importerer MovieList, som sandsynligvis er en komponent, der viser en liste over film
import MovieList from './MovieList';
// Importerer Search, en komponent der håndterer søgefunktionalitet i appen
import Search from './Search';

// Definerer Home komponenten som en funktionel komponent
const Home = () => {
     // Funktionen returnerer JSX, som bestemmer, hvad der vises på hjemmesiden
    return (
        <div> 
            <h1>Movie App</h1> 
            <Search />
            <MovieList /> 
        </div>
    );
    // Stor overskrift for appens navn eller formål - Movie App
    // Integrerer søgekomponenten, der lader brugere søge efter film - Search
    // Integrerer en liste-komponent, der viser filmene - MovieList
};
// Eksporterer Home komponenten for at gøre den tilgængelig i andre dele af applikationen
export default Home;
