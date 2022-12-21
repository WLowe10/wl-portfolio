import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    tree: {
        display: "flex",
      //  flexDirection: "row",
    },
    treeSource: {
        width: 50,
        height: 50,
        backgroundColor: "red"
    },
    treeItem: {
        width: 50,
        height: 50,
        backgroundColor: "purple" 
    }
});