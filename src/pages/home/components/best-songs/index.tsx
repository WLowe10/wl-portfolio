import { useStyles } from "./styles";
import { YoutubeLink } from "@global/components/general";

const songs = [
    {
        name: "Spider-Man Resposibility Theme",
        artist: "Danny Elfman"
    },
    {
        name: "Battle Hymn Of The Republic",
        artist: "John Mcdermott"
    },
]

export const BestSongs = () => {
    const classes = useStyles();

    return (
        <div className={classes.bestSongs}>
            {
                songs.map(song => <YoutubeLink />)
            }
        </div>
    )
};