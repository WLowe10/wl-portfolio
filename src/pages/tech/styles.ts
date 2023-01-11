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
    },
    skillContainer: {
        // justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        gap: "1rem"
    }
})