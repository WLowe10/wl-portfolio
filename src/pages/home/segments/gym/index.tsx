import { useStyles } from "./styles";
import { AboutSection } from "../../components";
import { Theme } from "@global/constants/theme";

const songs = [
    {
        title: "Spider-Man Resposibility Theme",
        artist: "Danny Elfman",
    },
    {
        title: "Sound of The Shire",
        artist: "The City of Prague Philharmonic Orchestra",
    },
    {
        title: "Battle Hymn Of The Republic",
        artist: "John Mcdermott",
    },
]

export const Gym = () => {
    const classes = useStyles();

    return (
        <AboutSection title={"🏋️ Gym"}>
            <div className={classes.gym}>
            </div>
        </AboutSection>
    )
};