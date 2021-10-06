import React, {useContext, useEffect, useState} from 'react';
import {IProject, IUser} from 'Interfaces';
import {ProjectsContext} from 'Components/Context/projectsProvider';
import styles from 'Components/Tracker/tracker.module.scss';
import {apiGetUsersArray} from 'Components/services/api';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tracker = () => {

  const projectsContext = useContext(ProjectsContext);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    apiGetUsersArray().then((u) => setUsers(u),(e)=>{
      console.log("error!!!!!!", e)
      notify();
    });
  }, []);

  const notify = () => toast.error('Connection error!', {
    position: "top-right",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const usersList = users.map((user: IUser) => <option value={user.name}
                                                       key={user.id}>{user.name} </option>);

  function formSubmitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      user: { value: string };
      projectName: { value: string };
      projectNote: { value: string };
      projectTime: { value: string };
    };

    const project: IProject = {
      id: uuidv4(),
      user: target.user.value,
      name: target.projectName.value,
      note: target.projectNote.value,
      time: target.projectTime.value,
    }
    projectsContext.setProjects([...projectsContext.projects, project]);
  }


  return (
    <div className={styles.tracker}>
      <div className={styles.form}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="user">Choose a user:</label>
            <select name="user">
              {usersList}
            </select>
          </div>
          <div className={styles.section}>
            <label htmlFor="projectName">Project name:</label>
            <input
              required
              name="projectName"
              type="text"
              placeholder={"Project name"}/>
          </div>
          <div className={styles.section}>
            <label htmlFor="projectNote">Project note:</label>
            <textarea name="projectNote" placeholder={"Project note"}/>
          </div>
          <div className={styles.section}>
            <label htmlFor="projectTime">Project time:</label>
            <input name="projectTime" type="text" placeholder={"Project time"}/>
          </div>
          <button className={styles.submitBtn} type={"submit"}>Create project</button>
        </form>
      </div>
      <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
      />
    </div>
  );
};

export default Tracker;
