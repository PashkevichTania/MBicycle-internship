import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../../Constants";
import {IProject, IUser} from "../../Interfaces";
import {ProjectsContext} from "../Provider/projectsProvider";

const Tracker = () => {


    async function apiGet(){
        const response = await axios.get(`${API_PATH.BASE}`);
        const usersArray:IUser[] = response.data;
        setUsers(usersArray);
    }


    const context = useContext(ProjectsContext);

    const [users, setUsers] = useState<IUser[]>();
    const [user, setUser] = useState('');

    useEffect(()=>{

        apiGet();

    },[]);

    const usersList = users?.map((user) => <option value={user.name} key={user.id}>{user.name}</option>);


    function userChangeHandler(event: React.ChangeEvent<HTMLSelectElement>){
        setUser(event.target.value);
    }
    function formSubmitHandler(event:any){
        event.preventDefault();

        const project:IProject = {
            user: user,
            name: event.target.projectName.value,
            note: event.target.projectNote.value,
            time: event.target.projectTime.value,
        }
        context.setProjects([...context.projects, project]);
    }


    return (
        <div className={"tracker"}>
            <div>
                <label htmlFor="users">Choose a user:</label>
                <select name="users" onChange={userChangeHandler} value={user} >
                    {usersList}
                </select>
            </div>

            <div className={"tracker_form"}>
                <form onSubmit={formSubmitHandler}>

                    <div className={"form_section"}>
                        <label htmlFor="projectName">Project name:</label>
                        <input name="projectName" type="text" placeholder={"Project name"}/>
                    </div>
                    <div className={"form_section"}>
                        <label htmlFor="projectNote">Project note:</label>
                        <textarea name="projectNote"  placeholder={"Project note"}/>
                    </div>
                    <div className={"form_section"}>
                        <label htmlFor="projectTime">Project time:</label>
                        <input name="projectTime" type="number" placeholder={"Project time"}/>
                    </div>
                    <button type={"submit"}>submit</button>
                </form>
            </div>
        </div>
    );
};

export default Tracker;