import { ReactNode } from "react";
import { Music } from "react-feather";
import { useStyles } from "./styles";
import { useMediaQuery } from 'react-responsive'

type Props = {
    children: ReactNode,
    display: ReactNode,
    displaySide: "left" | "right"
};

export const AboutSection = ({children, display, displaySide}: Props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className={classes.aboutSection}>
            <div>
                <span style={{backgroundColor: "#41"}}/>
                <p className={classes.aboutTitle}>🎵 Top 5 Songs Of Human History</p>
            </div>
            <div className={classes.content}>
                {/* {
                    isMobile && display
                } */}
                {
                    children
                }
            </div>
        </div>
    )
};