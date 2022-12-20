import { createUseStyles } from "react-jss";
import { Families, Weights, Sizes } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";

export const useStyles = createUseStyles({
    topBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: {
            bottom: 50
        }
    },

    title: {
        fontFamily: Families.SaiyanSans,
        color: Theme.fontColors.primary,
        fontSize: Sizes.xl,
    },

    navElement: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        color: Theme.fontColors.secondary
    }
})