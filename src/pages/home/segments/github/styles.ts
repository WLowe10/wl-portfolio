import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    github: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    countUp: {
        color: Theme.fontColors.primary,
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[700],
        fontSize: Sizes.Large
    }
});