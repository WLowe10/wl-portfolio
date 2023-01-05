import { ReactNode } from "react";
import { Legend } from "../legend";
import { Skill } from "../skill";
import { useStyles } from "./styles";
import tslogo from "@global/assets/images/typescript.png";

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

type Skill = {
    name: string,
};

export const SkillCard = ({skillGroup}: Props) => {
    const classes = useStyles();
    const cardName = skillGroup.name; 
    const keys = skillGroup.categories.map(c => ({name: c.name, accent: c.accent}))

    return (
        <div className={classes.skillCard}>
            <div className={classes.header}>
                <div className={classes.head}>
                    {
                        skillGroup.image
                    }
                    <h1 className={classes.title}>{cardName}</h1>
                </div>
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