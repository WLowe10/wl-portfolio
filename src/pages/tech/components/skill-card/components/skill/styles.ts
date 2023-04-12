import { createUseStyles } from "react-jss";
import { Families } from "@global/constants/fonts";
import { Theme } from "@global/constants/theme";

export const useStyles = createUseStyles({
    skill: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderRadius: 8,
        flex: 1  
    },
    skillTitle: {
        fontFamily: Families.NunitoSans,
        color: Theme.fontColors.primary,
    },
    skillImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 8,
        backgroundColor: Theme.accents.darker,
        marginRight: 10 
    },
    arrowContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        paddingLeft: 10
    }
})