import { useStyles } from "./styles";

export const PresenceBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.presenceBar}>
            {/* <p className={classes.text}>
                Based in the United States
            </p>
            <p className={classes.text}>
                Local Time: 11:28 
            </p> */}
        </div>
    )
};