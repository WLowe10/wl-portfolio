import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    youtubeLink: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: Theme.accents.dark,
        height: 128,
        borderRadius: "1rem",
        overflow: "hidden"
    },
    songInfo: {
        display: "flex",
        flexDirection: "column",
        flex: 2,
        fontFamily: Families.NunitoSans,
        justifyContent: "center",
        padding: "1rem",
    },
    songTitle: {
        fontSize: Sizes.Medium,
        fontWeight: Weights.NunitoSans[600],
        color: Theme.fontColors.primary
    },
    artistName: {
        fontSize: Sizes.Default,
        color: Theme.fontColors.secondary
    },
    songRanking: {
        fontFamily: Families.NunitoSans,
        fontSize: Sizes.ExtraLarge,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: Theme.accents.grey,
        fontWeight: Weights.NunitoSans[700],

    }
});