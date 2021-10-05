import React, {useContext} from 'react';
import { IProject } from '../../Interfaces';
import {ProjectsContext} from "../Provider/projectsProvider";
import ProjectElement from "./ProjectElement";
import './project.scss'

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
        <div className={"projectsListWrap"}>
            <ul className={"projectsList"} >
                {projectsList.length? projectsList: "No projects"}
            </ul>
        </div>
    );
};

export default ProjectsList;