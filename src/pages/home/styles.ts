import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    home: {
        backgroundColor: Theme.background,
        justifyContent: "center", 
        height: "100%"
    },

    mainContainer: {
        display: "flex",
        flex: 1,
        padding: 40,
        flexDirection: "column",
        maxWidth: "56rem",
    },

    cardGrid: {
        paddingTop: "5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
    },
})