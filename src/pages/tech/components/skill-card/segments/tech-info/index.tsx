import { Theme } from "@global/constants/theme";
import { useStyles } from "./styles"
import { ChevronLeft } from "react-feather";
import { TechDetailsType } from "@global/types";
import { GithubLink, NpmLink, Pill } from "@global/components/general";
import { Npm } from "@global/components/icons";
import { Gallery } from "./gallery";
import { useMediaQuery } from "react-responsive";

type Props = {
    details: TechDetailsType,
    clearTech: () => void
};

export const TechInfo = ({details, clearTech}: Props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { name, pill, description } = details;

    return (
        <div className={classes.techInfo}>
            <div className={classes.header}>
               <button className={classes.backButton} onClick={clearTech}>
                    <ChevronLeft color={Theme.fontColors.primary}/>
                </button>
                <div className={classes.credentials}>
                    <h1 className={classes.techInfoName}>
                        {
                            name
                        }
                    </h1> 
                    <Pill color={pill.color} text={pill.text}/>
                </div>
            </div>
            <div className={classes.mainInfo}>
                <p className={classes.description} style={{hyphens: isMobile ? "auto" : "inherit"}}>
                    {
                        description
                    }
                </p>                
            </div>

            <div className={classes.galleryContainer}>
                <Gallery />
            </div>

            <div className={classes.footer}>
                <GithubLink href="" />
                <NpmLink href=""/>
            </div>
        </div>
    )
}