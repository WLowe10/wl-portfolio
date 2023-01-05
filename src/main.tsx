import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './root';
//import 'normalize.css';
import "reset-css"

//*fonts*//
import "@global/assets/fonts/saiyan-sans/font.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/ubuntu/400.css";

import "@fontsource/satisfy/400.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
