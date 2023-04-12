import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    song: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    thumbnail: {
        borderRadius: 8,
        marginRight: 10
    },
    songInfo: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    songTitle: {
        color: Theme.fontColors.primary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        fontSize: "1.25rem"
    },
    songAuthor: {
        color: Theme.fontColors.secondary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        fontSize: "1rem"
    },
});