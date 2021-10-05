import React, {useContext} from 'react';
import {ProjectsContext} from "../Context/projectsProvider";
import {IProject} from "../../Interfaces";

const ProjectDetails = () => {

    const projectsContext = useContext(ProjectsContext);
    const url = window.location.href.toString().match(/project\/(.*)/gm);
    const id = url?.toString().substring(8);
    const project:IProject = projectsContext.projects.find((project: IProject)=> project.id == id );

    return (
        <div className={"projectDetails"}>
            {project? (
                <div className={"projectDetails-box"}>
                    <p className={"projectDetails-id"}>
                        <span className={"projectDetails-span"}>
                        Project ID:
                        </span>
                        {project.id}
                    </p>
                    <p className={"projectDetails-user"}>
                        <span className={"projectDetails-span"}>
                        Project User:
                        </span>
                        {project.user}
                    </p>
                    <p className={"projectDetails-name"}>
                        <span className={"projectDetails-span"}>
                        Project Name:
                        </span>
                        {project.name}
                    </p>
                    <p className={"projectDetails-time"}>
                        <span className={"projectDetails-span"}>
                        Project time:
                        </span>
                        {project.time}
                    </p>
                    <p className={"projectDetails-note"}>
                        <span className={"projectDetails-span"}>
                        Project Note:
                        </span>
                        {project.note}
                    </p>
                </div>
            ): 'project not found'}
        </div>
    );
};

export default ProjectDetails;