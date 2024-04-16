// Importerer nødvendige funktioner og komponenter fra React og andre moduler
import React, { useState } from 'react';
// Importerer en custom hook fra movieSlice, der bruges til at udføre søgeanmodninger
import { useSearchMoviesQuery } from '../features/movies/movieSlice';
// Importerer 'FavoriteButton' komponenten, der bruges til at markere film som favoritter
import FavoriteButton from './FavoriteButton';
// Importerer 'Link' fra 'react-router-dom', som gør det muligt at oprette navigerbare links i applikationen
import { Link } from 'react-router-dom';

// Definerer 'Search' komponenten
const Search = () => {
    // Opretter en lokal state 'query' til at holde søgestrengen
    const [query, setQuery] = useState('');

    // Bruger 'useSearchMoviesQuery' hook til at udføre søgning baseret på 'query'. 
    // 'skip' muligheden sørger for, at anmodninger kun sendes, når der er en søgestreng
    const { data: movies, isLoading, error } = useSearchMoviesQuery(query, {
        skip: query.length === 0
    });
    // Definerer en håndteringsfunktion, der opdaterer 'query' baseret på brugerens input
    const handleSearch = (event) => {
        setQuery(event.target.value);
    };
    // JSX strukturen for komponenten
    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for movies..."
            />
            {query.length > 0 && (
                <>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error fetching movies.</p>}
                    <ul>
                        {movies?.results.map(movie => (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                <FavoriteButton movieId={movie.id} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
    // Input felt til søgning. 'value' og 'onChange' synkroniserer feltet med 'query' state - handleSearch
    // Konditionel rendering baseret på om der er indtastet en søgestreng - query.length
    // Viser en indlæsningsmeddelelse, hvis data er ved at blive hentet - IsLoading
    // Viser en fejlmeddelelse, hvis der er en fejl ved hentning af data - error
    // Liste, der viser søgeresultaterne -movies?.results.map
    // Link til filmens detaljeside - Link
    // Favoritknap for at markere filmen som favorit - FavoriteButton
};
// Eksporterer 'Search' komponenten for anvendelse i andre dele af applikationen
export default Search;