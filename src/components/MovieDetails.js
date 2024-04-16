// Importerer nødvendige hooks fra React og router-funktionalitet fra react-router-dom
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Definerer 'MovieDetails' komponenten, der bruges til at vise detaljer om en specifik film
const MovieDetails = () => {
    // Henter filmens ID fra URL'en gennem useParams hook, der giver adgang til routerens parametre
    const { movieId } = useParams();
    // Opretter tre state variabler:
    // 'movie' til at gemme filmdata, initialiseret som null indtil data hentes
    // 'isLoading' til at vise/håndtere indlæsningsstatus
    // 'error' til at gemme eventuelle fejlmeddelelser fra fetch operationen
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect hook der udføres ved komponentens mount og når 'movieId' ændres
    useEffect(() => {
        setIsLoading(true); // Sætter indlæsningsstatus til true ved start af datahentning
        // Starter en fetch operation for at hente filmdata fra TheMovieDB API
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=54f6763edd46376d94f989e66c5eefff&language=en-US`)
            .then(response => response.json()) // Parser svaret som JSON
            .then(data => {
                console.log(data);  // Logger data'en til at se hvad der er hentet.
                setMovie(data); // Opdaterer 'movie' state med de hentede data
                setIsLoading(false); // Sætter indlæsningsstatus til false efter data er hentet
            })
            .catch(err => { 
                setError(err.message); // Sætter en fejlmeddelelse hvis fetch fejler
                setIsLoading(false); // Sætter indlæsningsstatus til false hvis der opstår en fejl
            });
    }, [movieId]) // Afhængighed af 'movieId' sikrer, at data genhentes når ID ændres

    // Konditionelle renderinger baseret på state:
    if (isLoading) return <div>Loading...</div>; // Viser en loading besked under datahentning
    if (error) return <div>Error: {error}</div>; // Viser en fejlmeddelelse hvis der er fejl
    if (!movie) return <div>No movie found</div>; // Viser en besked hvis ingen film er fundet
    
    // Hoved JSX der returneres, når der ikke er fejl eller loading, med andre ord, så returnerer JSX, der viser filmens detaljer
return (
    <div>
        <h2>{movie.title}</h2>
        {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        )}
        <p>{movie.overview}</p>
        {movie.genres && (
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        )}
        <p><strong>Release Date:</strong> {movie.release_date}</p>
    </div>
);
// Viser filmens titel - Movie.title
// Viser en kort beskrivelse af filmen - movie.overview
// Lister filmens genrer - Movie.Genres
// Viser filmens udgivelsesdato - movie.release.dates
};

// Eksporterer 'MovieDetails' komponenten for genbrug og integration i andre dele af applikationen
export default MovieDetails;
