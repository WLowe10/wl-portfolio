import { createUseStyles } from 'react-jss';
import { Theme } from '@global/constants/theme';
import type { AppProps } from 'next/app'

import "reset-css";
import "@global/assets/fonts/saiyan-sans/font.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/ubuntu/400.css";

import "@fontsource/satisfy/400.css";

const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%",
      backgroundColor: Theme.background
    },
    "button": {
      background: "none",
      color: "inherit",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer",
      outline: "inherit"
    },
  }
})

const App = ({ Component, pageProps }: AppProps) => {
    useGlobalStyles();

    return (
      <>
        <Component {...pageProps} />
      </>
    )
}

export default App;
