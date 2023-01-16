import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    techInfo: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        marginBottom: "1rem",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    backButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: Theme.accents.grey,
        borderRadius: 100
    },
    techInfoName: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.primary,
        fontSize: Sizes.Medium
    },
    mainInfo: {
        display: "flex",

        //!delete
        color: "white"
    }
})