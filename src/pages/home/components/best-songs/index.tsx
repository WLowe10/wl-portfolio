import { useStyles } from "./styles";
import { YoutubeLink } from "@global/components/general";
import BHOTR from "@global/assets/images/BHOTR.png"
import responsibility from "@global/assets/images/responsibility.png"

const songs = [
    {
        title: "Spider-Man Resposibility Theme",
        artist: "Danny Elfman",
        thumbnail: responsibility
    },
    {
        title: "Battle Hymn Of The Republic",
        artist: "John Mcdermott",
        thumbnail: BHOTR
    },
]

export const BestSongs = () => {
    const classes = useStyles();

    return (
        <div className={classes.bestSongs}>
            {
                songs.map((song, index) => <YoutubeLink thumbnail={song.thumbnail} ranking={index + 1} title={song.title} artist={song.artist}/>)
            }
        </div>
    )
};