import React, {useContext} from 'react';
import { IProject } from 'Interfaces';
import {ProjectsContext} from 'Context/projectsProvider';
import ProjectElement from 'components/Projects/ProjectElement';
import styles from 'components/Projects/Project.module.scss'

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