// Importerer nødvendige React-funktioner
import React, { createContext, useState, useEffect } from 'react';

// Opretter en ny context, som kan tilgås af enhver komponent der abonnerer på denne context
export const FavoritesContext = createContext();

// Opretter en provider-komponent, som skal indkapsle alle komponenter, der skal have adgang til denne context
export const FavoritesProvider = ({ children }) => {
    // Bruger useState til at oprette og håndtere tilstanden for 'favorites', initialiseret som et tomt array
    const [favorites, setFavorites] = useState([]);

    // Bruger useEffect til at indlæse favoritfilm fra localStorage, når komponenten mountes
    useEffect(() => {
        // Henter gemte favoritter fra localStorage, eller returnerer et tomt array hvis ingen favoritter er gemt
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    // Bruger en anden useEffect til at opdatere localStorage når 'favorites' ændres
    useEffect(() => {
        // Gemmer den nuværende tilstand af 'favorites' i localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Definerer en funktion til at tilføje eller fjerne en film fra favoritlisten
    const toggleFavorite = (movieId) => {
        // Tjekker om filmID allerede er i listen. Hvis ja, fjernes den; hvis nej, tilføjes den
        const newFavorites = favorites.includes(movieId) 
            ? favorites.filter(id => id !== movieId) // Fjerner id fra favoritter
            : [...favorites, movieId]; // Tilføjer ny id til favoritter
        setFavorites(newFavorites);
    };
    // Returnerer Provider-komponenten, der giver adgang til 'favorites' og 'toggleFavorite' til alle child-komponenter
    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
    // Render børnekomponenter, som nu kan tilgå disse værdier - {children}
};