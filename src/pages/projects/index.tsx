import { ProjectCard } from "./components";
import { useStyles } from "./styles";
import { PageTemplate } from "@global/components/templates";

const data = {

};

export const Projects = () => {
    const classes = useStyles();

    return (
        <PageTemplate>
            <div className={classes.projectsContainer}>
               <ProjectCard /> 
            </div>
        </PageTemplate>
    )
};