import { Theme } from "@global/constants/theme";
import { useStyles } from "./styles"
import { ChevronLeft } from "react-feather";

export const TechInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.techInfo}>
            <div className={classes.header}>
               <button className={classes.backButton}>
                    <ChevronLeft color={Theme.fontColors.primary}/>
                </button>
                <h1 className={classes.techInfoName}>
                   React
                </h1> 
            </div>
        </div>
    )
}