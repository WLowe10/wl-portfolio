import { useState, ReactNode, useEffect } from "react";
import { Legend, MainTech, TechInfo } from "./components";
import { Skill } from "./components";
import { useStyles } from "./styles";
import { motion, AnimatePresence } from "framer-motion"; 
import { useMediaQuery } from "react-responsive";
import useMeasure from "react-use-measure";
import { CollapsableCard } from "@global/components/general";
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
    }
};

const mainVariants = {
    enter: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    exit: {
        transform: "translateX(-110%)",
        opacity: 0,
        transition: {
            duration: .5
        }
    }
}; 

const detailsVariants = {
    enter: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    exit: {
        transform: "translateX(110%)",
        opacity: 0,
        transition: {
            duration: .5
        }
    }
};

//!!solve padding issue later
//!and fix width issue

export const SkillCard = ({skillGroup}: Props) => {
    const classes = useStyles();
    const [techDetails, setTechDetails] = useState<TechDetailsType | null>(null);
    const [measureRef, { height, width }] = useMeasure();

    const setTech = (techDetails: TechDetailsType) => {
       setTechDetails(techDetails) 
    };

    const clearTech = () => {
       setTechDetails(null);
    };

            //!fix the issue with resizing when changing, expirement with more position: "relative"
    return (
        //?possibly improve this transition
        //?fix width not animating
        <motion.div animate={{ height }} className={classes.skillCard}> 
            <div ref={measureRef} style={{position: "relative"}}>
                <AnimatePresence initial={false}>
                    {
                        !techDetails ? (
                            <motion.div initial={mainVariants.exit} animate={{...mainVariants.enter, position: "static" }} exit={{...mainVariants.exit, position: "absolute" }} key={"main"}>
                                <MainTech skillGroup={skillGroup} setTech={setTech}/>
                            </motion.div>
                        ) : (
                            <motion.div initial={detailsVariants.exit} animate={{...detailsVariants.enter, position: "static" }} exit={{...detailsVariants.exit, position: "absolute" }} key={"info"}>
                                <TechInfo details={techDetails} clearTech={clearTech}/>
                            </motion.div>
                        ) 
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    )
} 