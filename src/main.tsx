import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './root';
//import 'normalize.css';
import "reset-css"

//*fonts*//
import "@global/assets/fonts/saiyan-sans/font.css";

//*global styles*//

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
