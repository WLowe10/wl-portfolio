import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    footer: {
        paddingTop: "5rem"
    },
    separator: {
        height: 3,
        backgroundColor: Theme.accents.dark,
        borderRadius: 8
    },
    content: {
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mainHeader: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        color: Theme.fontColors.secondary,
        fontSize: Sizes.Large,
    },
    contact: {
        border: [2, "solid", Theme.accents.dark],
        borderRadius: 8,
        padding: "1rem",
        color: Theme.fontColors.primary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600]
    }
});