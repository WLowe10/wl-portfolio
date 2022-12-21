import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    aboutSection: {
        display: "flex",
        flex: 1,
        flexDirection: "row", 
        alignItems: "center",
    },
    content: {
        display: "flex",
        flex: 2,
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
        maxWidth: "56rem",
    },
    display: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //maxWidth: "56rem",
    },
});