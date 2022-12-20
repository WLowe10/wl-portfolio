import { useState } from "react";
import { useStyles } from "./styles";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";

const chevronVariants = {
    open: {
        transform: "rotate(0deg)",
        transition: {
            type: "spring"
        }

    },
    closed: {
        transform: "rotate(90deg)",
        transition: {
            type: "spring"
        }
    }
};

const contentVariants = {
    open: {
        height: "max-content",
        opacity: 1,
        transition: {
            duration: .25
        }
    },
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            duration: .25
        }
    }
};

export const CollapsableCard = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.cardTitleRow}>
                <p className={classes.title}>
                    Title
                </p>

                <motion.button className={classes.expandButton} onClick={() => setOpen(prev => !prev)} variants={chevronVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                    <ChevronDown />
                </motion.button>
            </div>

            <motion.div className={classes.cardContent} variants={contentVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                <p>
                    hello world
                </p>
                <p>
                    hello world
                </p>
                <p>
                    hello world
                </p>
                

            </motion.div>
        </div>
    )
};