import React, {useEffect, useState} from 'react';
import {IProject} from "../../Interfaces";

export const ProjectsContext = React.createContext<any>({});

const ProjectsProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    const projectStorage = window.localStorage;
    const [projects, setProjects] = useState<IProject[]>([]);
    useEffect(()=>{
        if (projects.length){
            projectStorage.setItem('projects', JSON.stringify(projects))
        }
    },[projects])
    useEffect(()=>{
        let projectsFromStorage = projectStorage.getItem('projects')
        console.log("projectsFromStorage",  projectsFromStorage)
        if (projectsFromStorage){
            console.log("parse: ", JSON.parse(projectsFromStorage))
            if (projectsFromStorage.length){
                setProjects(JSON.parse(projectsFromStorage))
            }
        }
    },[])

    return (
        <ProjectsContext.Provider value={{projects: projects, setProjects: setProjects}}>
            {props.children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsProvider;