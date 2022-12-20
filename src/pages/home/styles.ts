import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    home: {
        backgroundColor: Theme.background,
        justifyContent: "center"
    },

    mainContainer: {
        display: "flex",
        flex: 1,
        padding: 40,
        flexDirection: "column",
        maxWidth: "56rem",
    },
})