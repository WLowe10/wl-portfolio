import { useStyles } from "./styles";
import { FullFlex, MaxContainer } from "@global/components/containers";
import { TopBar } from "@global/components/general";
import { Tree } from "./components";

export const Tech = () => {
    const classes = useStyles();

    return (
        <FullFlex className={classes.home}>
            <MaxContainer className={classes.mainContainer}>
                <TopBar/>
                <Tree />
            </MaxContainer>
        </FullFlex>
    )
};    
