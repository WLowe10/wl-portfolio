import { Providers } from "./providers";
import { Routes } from "./routes";

import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%"
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


export const Root = () => {
    useGlobalStyles();

    return (
        <Providers>
            <Routes />
        </Providers>
    )
}