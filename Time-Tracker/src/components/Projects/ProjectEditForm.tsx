import React, {useContext} from 'react';
import {IProject} from 'Interfaces';
import {ProjectsContext} from 'components/Context/projectsProvider';
import styles from 'components/Projects/PopUp.module.scss';


const ProjectEditForm = (props: { projectID: string, setShow: React.Dispatch<string> }) => {

    const projectsContext = useContext(ProjectsContext);

    const {projectID, setShow} = props;
    const currentProject = projectsContext.projects.find((p:IProject)=>{
        return p.id === projectID;
    })

    const closeHandler = () => {
        setShow('none')
    }

    const formSubmitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            user: { value: string };
            projectName: { value: string };
            projectNote: { value: string };
            projectTime: { value: string };
        };

        const newProject: IProject = {
            id: projectID,
            user: target.user.value,
            name: target.projectName.value,
            note: target.projectNote.value,
            time: target.projectTime.value,
        }

        const updatedProjects = projectsContext.projects.map((p: IProject)=> {
            return (p.id === newProject.id) ? newProject : p;
        })
        projectsContext.setProjects(updatedProjects);
        closeHandler();
    }

    return (
        <div className={styles.form}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="user">Choose a user:</label>
                    <input
                        defaultValue={currentProject.user}
                        required
                        name="user"
                        type="text"
                        placeholder={"User"}
                    />
                </div>
                <div className={styles.section}>
                    <label htmlFor="projectName">Project name:</label>
                    <input
                        defaultValue={currentProject.name}
                        required
                        name="projectName"
                        type="text"
                        placeholder={"Project name"}/>
                </div>
                <div className={styles.section}>
                    <label htmlFor="projectNote">Project note:</label>
                    <textarea
                        defaultValue={currentProject.note}
                        name="projectNote"
                        placeholder={"Project note"}/>
                </div>
                <div className={styles.section}>
                    <label htmlFor="projectTime">Project time:</label>
                    <input
                        defaultValue={currentProject.time}
                        name="projectTime"
                        type="text"
                        placeholder={"Project time"}/>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.closeBtn} onClick={closeHandler}>Cancel</button>
                    <button className={styles.saveBtn} type={"submit"}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default ProjectEditForm;