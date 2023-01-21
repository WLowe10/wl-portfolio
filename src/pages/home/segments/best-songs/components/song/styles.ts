import { Families, Sizes, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    song: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: Theme.accents.dark,
        overflow: "hidden",
        alignItems: "center",
        maxHeight: 64
    },
    songInfo: (isMobile) => ({
        display: "flex",
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 10 : null
    }),
    songText: {
        color: Theme.fontColors.secondary,
        fontFamily: Families.NunitoSans,
    }
});