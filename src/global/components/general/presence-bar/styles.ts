import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    presenceBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "1rem",
        paddingInline: "10rem"
    },
    text: {
        fontFamily: Families.NunitoSans,
        fontWeight: Weights.NunitoSans[600],
        color: Theme.fontColors.secondary
    }
});