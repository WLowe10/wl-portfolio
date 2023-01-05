import { ReactNode } from "react";
import { useStyles } from "./styles";

import tslogo from "@global/assets/images/typescript.png";

type Props = {
    children?: ReactNode,
    root?: boolean
};

export const TreeItem = ({children, root}: Props) => {
    const classes = useStyles();

    return (    
        <div className={classes.treeItem}>
            <div className={classes.mainContainer}>
                <span className={classes.bone} />
                <div className={classes.content}>
                    <img src={tslogo} height={64} width={64}/> 

                </div>
            </div>
            <div className={classes.children}>
                {
                    children
                }
            </div>
        </div>
    )
};``