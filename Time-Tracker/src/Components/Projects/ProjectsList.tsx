import React, {useContext} from 'react';
import { IProject } from 'Interfaces';
import {ProjectsContext} from 'Components/Context/projectsProvider';
import ProjectElement from 'Components/Projects/ProjectElement';
import styles from 'Components/Projects/project.module.scss'

const ProjectsList = () => {

    const projectsContext = useContext(ProjectsContext);

    const projectsList = projectsContext.projects.map((project: IProject) =>
        (
            <li key={project.id}>
                <ProjectElement key={project.id} project={project} />
            </li>
        )
    );

    return (
        <div className={styles.projectsListWrap}>
            <ul className={styles.projectsList} >
                {projectsList.length? projectsList: "No projects"}
            </ul>
        </div>
    );
};

export default ProjectsList;