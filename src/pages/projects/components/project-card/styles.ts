import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    projectCard: {
        backgroundColor: Theme.accents.dark,
        padding: "1rem"
    }
});