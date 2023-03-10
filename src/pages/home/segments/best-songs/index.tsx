import { useStyles } from "./styles";
import { Song } from "./components";
import { AboutSection } from "../../components";
import { Music } from "react-feather";
import { Theme } from "@global/constants/theme";

import BHOTR from "@global/assets/images/BHOTR.png";
import responsibility from "@global/assets/images/responsibility.png";
import shire from "@global/assets/images/shire.png";

const songs = [
    {
        title: "Spider-Man Resposibility Theme",
        artist: "Danny Elfman",
        thumbnail: responsibility
    },
    {
        title: "Sound of The Shire",
        artist: "The City of Prague Philharmonic Orchestra",
        thumbnail: shire
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
        <AboutSection title={"🎺 Top 5 Songs of Human History"}>
            <div className={classes.bestSongs}>
                {
                    songs.map((song, index) => <Song thumbnail={song.thumbnail} key={index} title={song.title} artist={song.artist}/>)
                }
            </div>
        </AboutSection>
    )
};