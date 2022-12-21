import { ReactNode } from "react";
import { Music } from "react-feather";
import { useStyles } from "./styles";

type Props = {
    children: ReactNode,
    display: ReactNode,
    displaySide: "left" | "right"
};

export const AboutSection = ({children, display, displaySide}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.aboutSection}>
            <div className={classes.display}>
                {
                    displaySide == "left" && display
                }
            </div>

            <div className={classes.content}>
                {
                    children
                }
            </div>

            <div className={classes.display}>
                {
                    displaySide == "right" && display
                }
            </div>
        </div>
    )
};