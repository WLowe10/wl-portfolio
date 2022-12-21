import { Theme } from "@global/constants/theme";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    treeItem: {
        display: "flex",
        flexDirection: "column",
    },
    itemContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    itemLogo: {
        width: 50,
        height: 50,
        backgroundColor: "blue"
    },
    itemBranchRoot: {
        height: "100%",
        width: 2,
        backgroundColor: Theme.accents.dark
    },
    itemBranch: {
        height: 100,
        width: 2,
        backgroundColor: Theme.accents.dark
    },
    descendantContainer: {
        marginLeft: 60
    }
});