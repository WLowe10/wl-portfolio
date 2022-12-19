import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Fonts } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    home: {
        backgroundColor: Theme.background,
        justifyContent: "center"
    },

    mainContainer: {
        display: "flex",
        padding: 20
    },

    topBar: {
        display: "flex",
        flexDirection: "row"
    },

    title: {
        fontFamily: Fonts.SaiyanSans,
        color: Theme.fontColors.primary,
        fontSize: "3rem",
    }
})