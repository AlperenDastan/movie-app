// Importerer React for at kunne definere og bruge React-komponenter
import React from 'react';
// Importerer 'Link' fra 'react-router-dom', som tillader oprettelse af navigerbare links uden at genindlæse siden
import { Link } from 'react-router-dom';

// Definerer 'Header' komponenten, som er en funktionel komponent
const Header = () => {
    // Komponenten returnerer JSX. JSX er en HTML-lignende syntaks brugt i React til at bygge brugergrænseflader
    return (
        <header>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
        </header>
    );
    // Anvender 'Link' komponenterne til at oprette links til hjemmesiden og 'Om' siden. Disse links ændrer URL'en uden en sideopfriskning - Link

};

// Gør 'Header' komponenten tilgængelig for andre filer i projektet ved at eksportere den
export default Header;
