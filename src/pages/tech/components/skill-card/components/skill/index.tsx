import { ReactNode } from "react";
import { useStyles } from "./styles";
import { ChevronRight } from "react-feather";
import { Theme } from "@global/constants/theme";

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
            <div className={classes.arrowContainer}>
                <ChevronRight color={Theme.fontColors.primary}/>
            </div>
        </div>
    )
};

