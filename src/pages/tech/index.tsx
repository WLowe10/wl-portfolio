import { useStyles } from "./styles";
import { FullFlex, MaxContainer } from "@global/components/containers";
import { TopBar } from "@global/components/general";
import { SkillCard } from "./components";
import { Express, JSS, React, Stripe, TypeORM, TypeScript, Zod } from "@global/components/icons";
import { Theme } from "@global/constants/theme";
import { useMediaQuery } from "react-responsive";
import zustand from "@global/assets/logos/zustand.png"

const iconSize = 24;

const skillGroup = {
    name: "TypeScript",
    image: <TypeScript height={iconSize * 2} width={iconSize * 2} style={{borderRadius: 8, marginRight: 10}}/>,
    categories: [
        {
            name: "Frontend",
            accent: "#4566DB",
            skills: [
                {
                    name: "React",
                    image: <React height={iconSize} width={iconSize}/>,
                    content: <p>test</p>
                },
                {
                    name: "React Native",
                    image: <React height={iconSize} width={iconSize}/>
                },
                {
                    name: "React-JSS",
                    image: <JSS height={iconSize} width={iconSize} fill={"white"} color={"white"}/>
                },
                {
                    name: "Zustand",
                    image: <img height={iconSize} width={iconSize} src={zustand} style={{borderRadius: 4}}/>
                }
            ]
        },
        {
            name: "Backend",
            accent: "#C23A3A",
            skills: [
                {
                    name: "Express",
                    image: <Express height={iconSize} width={iconSize} fill={Theme.fontColors.primary}/>
                },
                {
                    name: "TypeORM",
                    image: <TypeORM height={iconSize} width={iconSize} scale={.1}/>
                }
            ]
        },
        {
            name: "Universal",
            accent: "#001233",
            skills: [
                {
                    name: "Zod",
                    image: <Zod height={iconSize} width={iconSize}/>
                },
                {
                    name: "StripeJS",
                    image: <Stripe height={iconSize} width={iconSize}/>
                }
            ]
        }
    ]
}

export const Tech = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles(isMobile as any);

    return (
        <FullFlex className={classes.tech}>
            <MaxContainer className={classes.mainContainer}>
                <TopBar/>
                <div className={classes.skillContainer}>
                    <SkillCard skillGroup={skillGroup}/> 
                </div>
            </MaxContainer>
        </FullFlex>
    )
};    