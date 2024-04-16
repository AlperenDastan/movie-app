// Importerer React-biblioteket
import React from 'react';
// Importerer 'useGetMoviesQuery' custom hook fra movieSlice, der håndterer API-anmodninger for film
import { useGetMoviesQuery } from '../features/movies/movieSlice';
// Importerer 'Link' fra 'react-router-dom' til at oprette navigerbare links uden at genindlæse siden
import { Link } from 'react-router-dom';

// Definerer 'MovieList' som en funktionel komponent
const MovieList = () => {
     // Bruger 'useGetMoviesQuery' til at anmode om filmdata, og destrukturerer dens respons til at hente film, loading og fejltilstand
    const { data: movies, isLoading, error } = useGetMoviesQuery();

    // Håndtering af indlæsningsstatus: viser en indlæsningsbesked, mens data hentes
    if (isLoading) return <div className="text-center">Loading...</div>;
    // Håndtering af fejl: viser en fejlbesked, hvis der opstår en fejl under datahentningen
    if (error) return <div className="alert alert-danger">Error: {error.message}</div>;

    // Når data er hentet og der ikke er fejl, returneres en JSX-struktur til visning af filmene
    return (
        <div className="container mt-3">
            <div className="row">
                {movies?.results.map(movie => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={movie.id}>
                        <Link to={`/movies/${movie.id}`} className="text-decoration-none">
                            <div className="card h-100">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
    // Tjekker om 'movies' og 'movies.results' eksisterer før mapping - movies?.results.map
    // Link opretter en navigerbar rute til den enkelte film detalje side - Link
    // Filmens billede - img src
    // Filmens titel - movie.title
    // Filmens beskrivelse, begrænset til 100 tegn for at undgå for lang tekst - movie.overview.substring
};
// Eksporterer 'MovieList' komponenten for at gøre den tilgængelig i andre dele af applikationen
export default MovieList;