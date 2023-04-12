import { useStyles } from "./styles";
import { Github } from "@global/components/icons";
import { motion } from "framer-motion";

type Props = {
    name: string,
    description: string,
    link?: string,
    open: boolean,
}

export const ProjectCard = ({ name, description, open, link }: Props) => {
    const classes = useStyles(); 

    return (
        <motion.div className={classes.projectCard} whileHover={{ borderColor: "rgba(255,255,255,0.7)" }}>
            <a href={link} target={"_blank"} style={{ textDecoration: "none" }}>
                <div className={classes.cardHeader}>
                    <h1>
                        { 
                            name
                        }
                    </h1>
                    {
                        open ? <Github height={16}/> : <p style={{fontSize: 16}}>🔒</p>
                    }
                </div>
                <div className={classes.cardBody}>
                    <p>
                        {
                            description
                        }
                    </p>
                </div>
                <div>

                </div>
            </a>
        </motion.div>
    )
};