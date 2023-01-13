import { useStyles } from "./styles"; 
import { Legend } from "../legend";
import { ReactNode } from "react";
import { Skill } from "../skill";
import { useMediaQuery } from "react-responsive";

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
    }
};

export const MainTech = ({skillGroup}: Props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const classes = useStyles(isMobile as any);
    const keys = skillGroup.categories.map(c => ({name: c.name, accent: c.accent}))

    return (
            <div className={classes.mainContainer}> 
                <div className={classes.header}>
                    <button className={classes.head}> 
                        {
                            skillGroup.image
                        }
                        <h1 className={classes.title}>{skillGroup.name}</h1>
                    </button>
                    <Legend keys={keys}/>
                </div>
                <div className={classes.skillContainer}>
                    {
                        skillGroup.categories.map(cat => {
                            return (
                                cat.skills.map(s => <Skill name={s.name} accent={cat.accent} image={s.image}/>) 
                            )
                        })
                    }
                </div>
            </div>
    )
};
