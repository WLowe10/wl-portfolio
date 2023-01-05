import { useStyles } from "./styles";
import { FullFlex, MaxContainer } from "@global/components/containers";
import { TopBar, TextField, CollapsableCard, HoverableText } from "@global/components/general";
import { YoutubeLink } from "@global/components/general";
import { BestSongs } from "./components/best-songs";
import { AboutSection, DateAnnotation } from "./components";
import { Music } from "react-feather";
import { Theme } from "@global/constants/theme";

export const Home = () => {
    const classes = useStyles();

    return (
        <FullFlex className={classes.home}>
            <MaxContainer className={classes.mainContainer}>
                    <TopBar/>
                    <TextField>
                        <p>Hey! I'm <HoverableText text={"Wes"} />, a full stack developer with a love for coding and creating elegant applications. From the origin of Typescript and constantly learning new skills, I strive to push the boundaries of what's possible. Thanks for checking out my portfolio. This page in particular is an overview of my interests. Take a look around and see what I'm all about.</p>
                    </TextField>  
                    <DateAnnotation time={""}/>

                    <div className={classes.separator}>
                        <span className={classes.separatorBar}/> 
                        <p className={classes.separatorText}>
                           My Interests
                        </p>
                        <span className={classes.separatorBar}/> 
                    </div> 

                    <div className={classes.aboutContainer}>
                        <AboutSection displaySide={"left"} display={<Music size={128} color={Theme.accents.dark} />}>
                            <BestSongs />
                        </AboutSection> 
                    </div>

                    <CollapsableCard />
                </MaxContainer>
        </FullFlex>
    )
};    
