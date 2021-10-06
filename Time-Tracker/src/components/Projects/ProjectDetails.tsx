import React, {useContext, useState} from 'react';
import {ProjectsContext} from 'components/Context/projectsProvider';
import {IProject} from 'Interfaces';
import ProjectEditForm from 'components/Projects/ProjectEditForm';
import styles from 'components/Projects/Project.module.scss'

const ProjectDetails = () => {

    const projectsContext = useContext(ProjectsContext);
    const url = window.location.href.toString().match(/project\/(.*)/gm);
    const id = url?.toString().substring(8);
    const project:IProject = projectsContext.projects.find((project: IProject)=> project.id == id );
    const [show,setShow] = useState('none');

    const showHandler = () => {
        setShow('block')
    }



    return (
        <div className={styles.projectDetails}>
            {project? (
                <div>
                    <div style={{display: show}} className={styles.popup}>
                        <ProjectEditForm projectID={project.id} setShow={setShow} />
                    </div>
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
                        <button className={styles.editBtn} onClick={showHandler}>Edit</button>
                    </div>
                </div>
            ): 'project not found'}
        </div>
    );
};

export default ProjectDetails;