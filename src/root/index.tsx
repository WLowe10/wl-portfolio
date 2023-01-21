import { Theme } from "@global/constants/theme";
import { Providers } from "./providers";
import { Routes } from "./routes";

import { createUseStyles } from 'react-jss';
import { PresenceBar } from "@global/components/general/presence-bar";

const useGlobalStyles = createUseStyles({
  "@global": {
    "body": {
      overflow: "overlay",
      fontSize: "100%",
      backgroundColor: Theme.background
      //  background: "linear-gradient(329deg, rgba(65,94,218,1) 0%, rgba(0,0,0,1) 36%)",
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
//!add topbar to root
    return (
        <Providers>
            <PresenceBar />
            <Routes />
        </Providers>
    )
}