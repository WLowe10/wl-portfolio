import { Theme } from "@global/constants/theme";
import { useStyles } from "./styles"
import { ChevronLeft } from "react-feather";
import { TechDetailsType } from "@global/types";

type Props = {
    details: TechDetailsType,
    clearTech: () => void
};

export const TechInfo = ({details, clearTech}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.techInfo}>
            <div className={classes.header}>
               <button className={classes.backButton} onClick={clearTech}>
                    <ChevronLeft color={Theme.fontColors.primary}/>
                </button>
                <h1 className={classes.techInfoName}>
                    {
                        details.name
                    }
                </h1> 
            </div>
            <div className={classes.mainInfo}>
                <p>
                    I use {details.name} to build out the frontends of my web applications. 
                </p>                
            </div>
        </div>
    )
}