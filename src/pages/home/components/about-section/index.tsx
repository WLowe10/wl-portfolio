import { ReactNode } from "react";
import { Music } from "react-feather";
import { useStyles } from "./styles";

type Props = {
    children: ReactNode
};

export const AboutSection = ({children}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.aboutSection}>
            <div className={classes.display}>
                <Music />
            </div>
            
            <div>
            {
                children
            }
            </div>
        </div>
    )
};