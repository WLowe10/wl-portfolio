import { useStyles } from "./styles";
import { SkillCard } from "./components";
import { useMediaQuery } from "react-responsive";
import { techData } from "@global/data";
import { PageTemplate } from "@global/components/templates";

export const Tech = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles(isMobile as any);

    return (
        <PageTemplate>
            <div className={classes.skillContainer}>
                <SkillCard skillGroup={techData.skillGroups}/> 
            </div>
        </PageTemplate>
    )
};    