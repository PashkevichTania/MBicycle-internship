import React from 'react';
import { Link } from 'react-router-dom';
import {IProject} from "../../Interfaces";
import styles from "./project.module.scss"

const ProjectElement = (props: {project: IProject}) => {
    const {project} = props;
    return (
        <div>
            <p><span className={styles.span}>Project user: </span>{project.user}</p>
            <p><span className={styles.span}>Project name: </span>{project.name}</p>
            <div className={styles.linkWrap}>
                <Link to={"/project/"+project.id}  >Project details</Link>
            </div>
        </div>
    );
};

export default ProjectElement;