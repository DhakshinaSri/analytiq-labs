import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import './styles/global.css';
import App from './App.jsx';

/*
 * GitHub Pages fix: the site may be served from "/" OR from "/<repo-name>/".
 * Instead of hard-coding the repo name, derive the router basename from the
 * location of this script (it always lives in <site-root>/assets/).
 * Result: the same build works on any URL with no configuration, and
 * refreshing / sharing a deep link such as /<repo>/about never 404s because
 * each route is pre-rendered to its own folder at build time.
 */
const basename = new URL('../', import.meta.url).pathname.replace(/\/$/, '');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/analytiq-labs">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
