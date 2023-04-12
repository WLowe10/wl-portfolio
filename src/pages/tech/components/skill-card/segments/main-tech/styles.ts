import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    mainContainer: {
        position: "relative",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "1rem",
        justifyContent: "space-between",
        gap: 10
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
        fontSize: Sizes.Medium
    },
    skillContainer: (isMobile) => {
        return isMobile ? {
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        } : {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
        }
    },
})