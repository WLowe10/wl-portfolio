import CountUp from "react-countup";
import { useStyles } from "./styles";

export const Github = () => {
    const classes = useStyles();

    return (
        <div className={classes.github}>
            ⭐
            <CountUp 
                className={classes.countUp} 
                start={0} 
                end={1000}
                duration={2} 
            />
            ⭐
        </div>
    )
}