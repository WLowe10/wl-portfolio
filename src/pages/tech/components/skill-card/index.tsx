import { useState, ReactNode } from "react";
import { Legend, MainTech, TechInfo } from "./components";
import { Skill } from "./components";
import { useStyles } from "./styles";
import { motion, AnimatePresence } from "framer-motion"; 
import { useMediaQuery } from "react-responsive";
import useMeasure from "react-use-measure";
import { CollapsableCard } from "@global/components/general";

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

export const SkillCard = ({skillGroup}: Props) => {
    const classes = useStyles();
    // const [skill, setSkill] = useState(false);
    // const [ref, {height, width}] = useMeasure();
    
    return (
        <div className={classes.skillCard}> 
            {/* <MainTech skillGroup={skillGroup}/> */}
            <TechInfo />
        </div>
    )
};