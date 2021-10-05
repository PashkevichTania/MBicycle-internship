import React, {useState} from 'react';
import {IProject} from "../../Interfaces";

export const ProjectsContext = React.createContext<any>({});

const ProjectsProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {


    const [projects, setProjects] = useState<IProject[]>([]);

    return (
        <ProjectsContext.Provider value={{projects: projects, setProjects: setProjects}}>
            {props.children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsProvider;