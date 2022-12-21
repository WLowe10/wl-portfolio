import { useStyles } from "./styles";
import BHOTR from "@global/assets/images/BHOTR.png";

type Props = {
    thumbnail: any,
    title: string, 
    artist: string,
    ranking: number,
}

export const YoutubeLink = ({thumbnail, title, artist, ranking}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.youtubeLink}>
            <div>
                <img src={thumbnail} height={128} width={128}/>
            </div>

            <div className={classes.songInfo}>
                <h1 className={classes.songTitle}>
                    {
                        title
                    }
                </h1>
                <p className={classes.artistName}>
                    {
                        artist
                    }
                </p>
            </div>
            <p className={classes.songRanking}>
                { 
                ranking
                }
            </p>
        </div>
    )
};