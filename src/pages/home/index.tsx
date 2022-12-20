import { useStyles } from "./styles";
import { FullFlex } from "@global/components/containers";
import { TopBar, TextField, CollapsableCard, HoverableText } from "@global/components/general";

export const Home = () => {
    const classes = useStyles();

    return (
        <FullFlex className={classes.home}>
            <div className={classes.mainContainer}>
                <TopBar/>
                <TextField>
                    <p>"Hey there! I'm <HoverableText text={"Wes"} />, a fullstack developer with a love for coding and creating elegant applications. From the origin of Typescript and constantly learning new skills, I strive to push the boundaries of what's possible. Thanks for checking out my portfolio. This page in particular is an overview of my interests. Take a look around and see what I'm all about."</p>
                </TextField>

                <CollapsableCard />
            </div>
        </FullFlex>
    )
};    
