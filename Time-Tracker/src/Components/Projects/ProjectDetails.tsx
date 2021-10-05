import React, {useContext} from 'react';
import {ProjectsContext} from "../Context/projectsProvider";
import {IProject} from "../../Interfaces";
import styles from './project.module.scss'

const ProjectDetails = () => {

    const projectsContext = useContext(ProjectsContext);
    const url = window.location.href.toString().match(/project\/(.*)/gm);
    const id = url?.toString().substring(8);
    const project:IProject = projectsContext.projects.find((project: IProject)=> project.id == id );

    return (
        <div className={styles.projectDetails}>
            {project? (
                <div className={styles.box}>
                    <p className={styles.ID}>
                        <span className={styles.span}>
                        Project ID:
                        </span>
                        {project.id}
                    </p>
                    <p className={styles.user}>
                        <span className={styles.span}>
                        Project User:
                        </span>
                        {project.user}
                    </p>
                    <p className={styles.name}>
                        <span className={styles.span}>
                        Project Name:
                        </span>
                        {project.name}
                    </p>
                    <p className={styles.time}>
                        <span className={styles.span}>
                        Project time:
                        </span>
                        {project.time}
                    </p>
                    <p className={styles.note}>
                        <span className={styles.span}>
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