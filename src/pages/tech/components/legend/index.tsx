import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { useStyles } from "./styles";
import { Map } from "react-feather";
import { Theme } from "@global/constants/theme";

type Props = {
    keys: {
        name: string,
        accent: string
    }[]
};

const variants = {
    open: {
       opacity: 1,
       height: "auto",
        transition: {
        //    type: "spring",
           duration: .25,
        }
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: {
        //    type: "spring",
           duration: .25,
        }
    }
};

export const Legend = ({ keys }: Props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.legend}>
            <Map size={18}className={classes.legendButton} color={open ? Theme.fontColors.primary : Theme.fontColors.secondary} onClick={() => setOpen(prev => !prev)}/>
            <AnimatePresence>
                {
                    open && <motion.div className={classes.legendKey} animate={variants.open} exit={variants.closed} initial={variants.closed}>
                        <span className={classes.spacer} />
                        {
                            keys.map(k => 
                                <p className={classes.legendText} style={{backgroundColor: k.accent}}>
                                    {
                                        k.name
                                    }
                                </p>
                            )
                        }
                </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}