import { useStyles } from "./styles";
import { useMediaQuery } from "react-responsive";

type Props = {
    thumbnail: any,
    title: string, 
    artist: string,
}

export const Song = ({thumbnail, title, artist}: Props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles(isMobile as any);

    return (
        <div className={classes.song}>
            <img src={thumbnail} height={64} width={64}/>
            <div className={classes.songInfo}>
                <h1 className={classes.songText}>
                    {
                        title
                    }
                </h1>
                <p className={classes.songText}>
                    {
                        artist
                    }
                </p>
            </div>
        </div>
    )
};