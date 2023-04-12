import { ProjectCard } from "./components";
import { useStyles } from "./styles";
import { PageTemplate } from "@global/components/templates";
import { projectsData } from "@global/data";

const Projects = () => {
    const classes = useStyles();

    return (
        <PageTemplate>
            <div className={classes.projectsContainer}>
                {
                    projectsData.map((p, idx) => (
                        <ProjectCard 
                            name={p.name}
                            link={p.link}
                            open={p.open}
                            description={p.description}
                            key={idx}
                        />
                    ))
                }
            </div>
        </PageTemplate>
    )
};

export default Projects;