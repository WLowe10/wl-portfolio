import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    skillCard: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: Theme.accents.dark,
        borderRadius: 10,
        padding: "1rem",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "1rem",
        justifyContent: "space-between"
    },
    head: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    headImage: {
        marginRight: 10,
        borderRadius: 8 
    },
    title: {
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary,
        fontWeight: Weights.NunitoSans[400],
        fontSize: "1.25rem"
    },
    skillContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem"
    },
    skillGroup: {
    }
})