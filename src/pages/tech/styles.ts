import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Sizes, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    tech: {
        display: "flex",
        justifyContent: "center",         
    },
    mainContainer: {
        display: "flex",
        flex: 1,
        padding: "2rem",
        flexDirection: "column",
    },
    skillContainer: (isMobile) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: isMobile ? "center" : null
    })
})