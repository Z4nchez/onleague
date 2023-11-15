import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TourneyContextProvider } from "./context/TourneyContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TourneyContextProvider>
      <App/>
    </TourneyContextProvider>   
  </React.StrictMode>
);

