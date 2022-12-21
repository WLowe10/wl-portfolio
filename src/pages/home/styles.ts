import { createUseStyles } from "react-jss";
import { Theme } from "@global/constants/theme";
import { Families, Sizes, Weights } from "@global/constants/fonts";

export const useStyles = createUseStyles({
    home: {
        display: "flex",
        backgroundColor: Theme.background,
       // background: "linear-gradient(329deg, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 64%)",
       //background: "linear-gradient(329deg, rgba(65,94,218,1) 0%, rgba(0,0,0,1) 36%)",
        justifyContent: "center",         
    },
    mainContainer: {
        display: "flex",
        flex: 1,
        padding: "2rem",
        flexDirection: "column",
        maxWidth: "56rem",
    },
    separator: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: {
            top: "5rem",
            bottom: "5rem"
        }
    },
    separatorBar: {
        height: 2,
        borderRadius: 4,
        flex: 1,
        backgroundColor: Theme.accents.dark
    },
    separatorText: {
        fontFamily: Families.Satisfy,
        fontSize: Sizes.Medium,
        color: Theme.accents.grey,
        padding: {
            left: "1rem",
            right: "1rem"
        }
    },

    aboutContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "5rem",
    }
})