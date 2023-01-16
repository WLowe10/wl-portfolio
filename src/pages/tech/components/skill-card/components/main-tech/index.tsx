import { useStyles } from "./styles"; 
import { Legend } from "../legend";
import { ReactNode } from "react";
import { Skill } from "../skill";
import { useMediaQuery } from "react-responsive";
import { TechDetailsType } from "@global/types";

type Props = {
    skillGroup: {
        name: string,
        image: ReactNode,
        categories: {
            name: string,
            accent: string,
            skills: {
                name: string,
                image: ReactNode
            }[]
        }[]
    },
    setTech: (techDetails: TechDetailsType) => void,
};

export const MainTech = ({skillGroup, setTech}: Props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles(isMobile as any);
    const keys = skillGroup.categories.map(c => ({name: c.name, accent: c.accent}))

    return (
            <div className={classes.mainContainer}> 
                <div className={classes.header}>
                    <div className={classes.head}> 
                        {
                            skillGroup.image
                        }
                        <h1 className={classes.title}>{skillGroup.name}</h1>
                    </div>
                    <Legend keys={keys}/>
                </div>
                <div className={classes.skillContainer}>
                    {
                        skillGroup.categories.map((cat) => {
                            return (
                                cat.skills.map((s, index) => (
                                    <button style={{display: "flex"}} onClick={() => setTech({name: s.name})}>
                                        <Skill name={s.name} accent={cat.accent} image={s.image} key={index}/>
                                    </button>
                                )) 
                            )
                        })
                    }
                </div>
            </div>
    )
};
