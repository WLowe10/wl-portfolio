import { TypeScript, React, JSS, Express, TypeORM, Zod, Stripe } from "@global/components/icons";
import { Theme } from "@global/constants/theme";
import zustand from "@global/assets/logos/zustand.png";

const iconSize = 24;

const skillGroups = {
    name: "TypeScript",
    image: <TypeScript height={iconSize * 2} width={iconSize * 2} style={{borderRadius: 8, marginRight: 10}}/>,
    categories: [
        {
            name: "Frontend",
            accent: "#2B65EC",
            skills: [
                {
                    name: "React",
                    image: <React height={iconSize} width={iconSize}/>,
                    content: <p>test</p>
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
            accent: "#003366",
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
            name: "Mobile",
            accent: "#01796f ",
            skills: [
                {
                    name: "React Native",
                    image: <React height={iconSize} width={iconSize}/>
                }
            ]
        },
        {
            name: "Universal",
            accent: "#333333",
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

export const techData = {
    skillGroups
}