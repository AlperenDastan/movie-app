// Importerer React fra 'react' biblioteket for at kunne bruge React's funktionaliteter
import React from 'react';

// Definerer en funktionel React-komponent ved navn 'About'
const About = () => {
    // Funktionen returnerer JSX, som er en kombination af JavaScript og HTML
    return (
        <div>
            <h1>About the Movie App</h1>
            <p>This app uses TheMovieDB API to display a list of popular movies.</p>
        </div>
    );
    // En hovedoverskrift, der fortæller brugeren hvad denne side er om - About the Movie App
    // Et afsnit, der beskriver funktionaliteten af appen - This app uses TheMovieDB API to display a list of popular movies
};
// Gør 'About' komponenten tilgængelig for andre dele af applikationen ved at eksportere den
export default About;
