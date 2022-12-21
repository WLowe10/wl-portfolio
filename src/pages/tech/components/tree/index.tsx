import { useStyles } from "./styles";
import { TreeItem } from "../tree-item";

export const Tree = () => {
    const classes = useStyles();

    return (
        <div className={classes.tree}>
            <TreeItem>
                <TreeItem>
                    <TreeItem />
                </TreeItem>
            </TreeItem>

            {/* <TreeItem root>
                <TreeItem>
                    <TreeItem />
                </TreeItem>
            </TreeItem> */}
        </div>
    )
};