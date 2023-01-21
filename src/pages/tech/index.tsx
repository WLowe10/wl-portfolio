import { useStyles } from "./styles";
import { FullFlex, MaxContainer } from "@global/components/containers";
import { TopBar } from "@global/components/general";
import { SkillCard } from "./components";
import { useMediaQuery } from "react-responsive";
import { techData } from "@global/data";

export const Tech = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles(isMobile as any);

    return (
        <FullFlex className={classes.tech}>
            <MaxContainer className={classes.mainContainer}>
                <TopBar/>
                <div className={classes.skillContainer}>
                    <SkillCard skillGroup={techData.skillGroups}/> 
                </div>
            </MaxContainer>
        </FullFlex>
    )
};    