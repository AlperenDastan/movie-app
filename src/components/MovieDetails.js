// Importerer React og nødvendige hooks
import React from 'react';
import { useParams } from 'react-router-dom';
// Importerer den auto-genererede RTK Query hook for at hente detaljer om en specifik film - Der bruges ''useGetMovieDetailsQuery''
import { useGetMovieDetailsQuery } from '../features/movies/movieSlice';

// Definerer 'MovieDetails' komponenten, der bruges til at vise detaljer om en specifik film
const MovieDetails = () => {
    // Henter filmens ID fra URL'en gennem useParams hook
    const { movieId } = useParams();
    // Bruger den auto-genererede RTK Query hook for at anmode om film detaljer
    const { data: movie, isFetching, isError, error } = useGetMovieDetailsQuery(movieId);

    // Konditionelle renderinger baseret på query state
    if (isFetching) return <div>Fetching...</div>; // Viser en indlæsningsbesked
    if (isError) return <div>Error: {error}</div>; // Viser en fejlmeddelelse hvis der er fejl
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
