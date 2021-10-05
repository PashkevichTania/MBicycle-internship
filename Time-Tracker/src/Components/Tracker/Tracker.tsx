import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../../Constants";
import {IProject, IUser} from "../../Interfaces";

const Tracker = () => {


    async function apiGet(){
        const response = await axios.get(`${API_PATH.BASE}`);
        const usersArray:IUser[] = response.data;
        setUsers(usersArray);
    };


    const [projects, setProjects] = useState<IProject[]>([]);
    const [users, setUsers] = useState<IUser[]>();
    const [user, setUser] = useState('');

    useEffect(()=>{

        apiGet();

    },[]);

    const usersList = users?.map((user) => <option value={user.name} key={user.id}>{user.name}</option>);


    function userChangeHandler(event: React.ChangeEvent<HTMLSelectElement>){
        setUser(event.target.value);
    }


    return (
        <div className={"tracker"}>
            <div>
                <label htmlFor="cars">Choose a user:</label>
                <select name="user" onChange={userChangeHandler} value={user} >
                    {usersList}
                </select>
            </div>

        </div>
    );
};

export default Tracker;