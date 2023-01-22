import { useStyles } from "./styles";

export const ProjectCard = () => {
    const classes = useStyles(); 

    return (
        <div className={classes.projectCard}>
            <div>
                <h1>
                    Sigma
                </h1>
            </div>
        </div>
    )
};