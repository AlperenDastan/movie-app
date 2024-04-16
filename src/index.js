// Importerer React-biblioteket for at bruge React's funktionaliteter
import React from 'react';
// Importerer ReactDOM for at kunne interagere med DOM'en
import ReactDOM from 'react-dom';
// Importerer CSS for at style applikationen
import './index.css';
// Importerer hovedkomponenten 'App' fra dens fil
import App from './App';
// Importerer 'Provider' fra 'react-redux', hvilket er nødvendigt for at integrere Redux med React
import { Provider } from 'react-redux';
// Importerer 'store' fra sin fil, dette er Redux store, som holder applikationens tilstand
import store from './app/store'; 

// Bruger ReactDOM til at rendere React-elementer i DOM'en
ReactDOM.render(
  // React.StrictMode er et værktøj for at tjekke for potentielle problemer i applikationen
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  // Provider komponenten fra react-redux omslutter 'App', så Redux's 'store' kan tilgås fra alle komponenter indenfor 'App' - Provider store={store}
  // 'App' er rodkomponenten, som indholder alle andre komponenter i applikationen - <App>
  
  // Dette specificerer, hvor i HTML-dokumentet React-applikationen skal indlæses, baseret på elementets id
  document.getElementById('root')
);
