import { Families, Weights } from "@global/constants/fonts";
import {  } from "@global/constants/fonts/families";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    textField: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        color: Theme.fontColors.secondary,
        fontSize: "2rem",
        lineHeight: "3rem",
    },
});