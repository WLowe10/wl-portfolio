import { Families, Weights } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    legend: {
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        overflow: "hidden",
    },
    legendButton: {
        backgroundColor: Theme.accents.darker,
        padding: 10, 
        borderRadius: 8,
        userSelect: "none"
    },
    legendKey: {
        display: "flex",
        flexDirection: "column", 
        gap: 10
    },
    legendText: {
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary, 
        padding: 5,
        borderRadius: 4
    },
    spacer: {
        marginTop: 10
    }
});