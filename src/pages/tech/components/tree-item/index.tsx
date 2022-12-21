import { ReactNode } from "react";
import { useStyles } from "./styles";

type Props = {
    children?: ReactNode,
    root?: boolean
};

export const TreeItem = ({children, root}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.treeItem}>
            <div className={classes.itemContainer}>
                <div className={classes.itemLogo}>

                </div>

                <div className={root ? classes.itemBranchRoot : classes.itemBranch}>

                </div>
            </div>
            <div className={classes.descendantContainer}>
                { 
                    children
                }
            </div>
        </div>
    )
};