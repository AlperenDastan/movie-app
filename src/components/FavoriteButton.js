// Importerer nødvendige React-funktioner, herunder useContext, som tillader brug af context i denne komponent
import React, { useContext } from 'react';
// Importerer FavoritesContext for at få adgang til den delte tilstand, der indeholder favoritinformation
import { FavoritesContext } from '../FavoritesContext'; // Adjust path as necessary

// Funktionel komponent 'FavoriteButton' defineres med 'movieId' som parameter
const FavoriteButton = ({ movieId }) => {
     // Henter 'favorites' listen og 'toggleFavorite' funktionen fra FavoritesContext ved hjælp af useContext
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
     // Afgør om den givne 'movieId' er i 'favorites' listen
    const isFavorited = favorites.includes(movieId);

    // Returnerer en knap, der ikke har synlige kanter eller baggrund, med et klik event der kalder 'toggleFavorite'
    return (
        <button onClick={() => toggleFavorite(movieId)} style={{ border: 'none', background: 'none' }}>
            {isFavorited ? '❤️' : '🤍'} 
        </button>
    );
    // Viser et rødt hjerte hvis favoriseret, ellers et hvidt hjerte - Hjerterne
};

// Eksporterer komponenten for at kunne importere og bruge den i andre filer
export default FavoriteButton;