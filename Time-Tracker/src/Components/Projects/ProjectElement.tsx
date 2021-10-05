import React from 'react';
import { Link } from 'react-router-dom';
import {IProject} from "../../Interfaces";

const ProjectElement = (props: {project: IProject}) => {
    const {project} = props;
    return (
        <div>
            <p>Project user: {project.user}</p>
            <p>Project name: {project.name}</p>
            <Link to={"/project/"+project.id} >Project details</Link>
        </div>
    );
};

export default ProjectElement;