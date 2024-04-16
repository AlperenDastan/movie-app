// Importerer React-biblioteket for at bruge React-komponenter
import React from 'react';
// Importerer Router-funktioner fra 'react-router-dom', der gør det muligt at navigere mellem forskellige komponenter uden at genindlæse siden
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Importerer 'FavoritesProvider' fra FavoritesContext for at tilvejebringe en global tilstand til favoritfilm
import { FavoritesProvider } from './FavoritesContext';
// Importerer diverse komponenter, som bruges til at bygge appens struktur
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import MovieDetails from './components/MovieDetails';
// Importerer Bootstrap CSS for at udnytte Bootstrap's designrammer
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Definerer App-funktionen, som er hovedkomponenten i applikationen
function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </FavoritesProvider>
  );
  // Indkapsler hele applikationen i en 'FavoritesProvider', som giver adgang til favoritfilmens tilstand overalt i komponenttræet - <FavoritesProvider>
  // Starter routeren, der håndterer navigationen mellem forskellige komponenter baseret på URL'en - <Router>
  // Header-komponenten, der sandsynligvis indeholder navigation og branding - <Header>
  // Switch-komponenten fra react-router-dom, som sørger for, at kun én rute vises ad gangen - <Switch>
  // Definerer en rute til 'Om' siden - < Route Path: About >
  // Definerer en rute til detaljesiden for en enkelt film, bruger URL-parameter 'movieId' - < Route Path: MovieDetails >
  // Definerer en rute til hovedsiden; denne rute er sat som standard siden den matcher stien - < Route Path: Home >
  
}
// Eksporterer App-komponenten, så den kan bruges i index.js filen for at rendere hele applikationen
export default App;