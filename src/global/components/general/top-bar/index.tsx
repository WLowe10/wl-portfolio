import { useStyles } from "./styles";
import { Mail } from "react-feather";
import { Theme } from "@global/constants/theme";

export const TopBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.topBar}>
            <h1 className={classes.title}>
                wes lowe
            </h1>

            <div className={classes.navElement}>
                Home
            </div>

            <div className={classes.navElement}>
                Projects
            </div>

            <div className={classes.navElement}>
                Tech
            </div>

            <Mail color={Theme.fontColors.secondary} />
        </div>
    )
};