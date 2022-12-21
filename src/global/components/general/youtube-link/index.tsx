import { useStyles } from "./styles";
import BHOTR from "@global/assets/images/BHOTR.png";

export const YoutubeLink = () => {
    const classes = useStyles();

    return (
        <div className={classes.youtubeLink}>
            <div>
                <img src={BHOTR} height={128} width={128}/>
            </div>
        </div>
    )
};