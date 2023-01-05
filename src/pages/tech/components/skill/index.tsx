import { ReactNode } from "react";
import { useStyles } from "./styles";

type Props = {
    name: string,
    accent: string,
    image: ReactNode
};

export const Skill = ({ name, accent, image}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.skill} style={{backgroundColor: accent}}>
            <div className={classes.skillImage}>
                {
                    image
                }
            </div>
            <p className={classes.skillTitle}>
                {
                    name
                }
            </p>
        </div>
    )
};

