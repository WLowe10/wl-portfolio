import { useStyles } from "./styles"; 
import { Legend } from "../../components/legend";
import { ReactNode, useEffect } from "react";
import { Skill } from "../../components/skill";
import { useMediaQuery } from "react-responsive";
import { SkillGroupType, TechDetailsType } from "@global/types";

type Props = {
    skillGroup: SkillGroupType,
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
                                <button style={{display: "flex"}} key={index} onClick={() => setTech({
                                    name: s.name, 
                                    description: s.description,
                                    pill: { color: cat.accent, text: cat.name },
                                })}>
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
