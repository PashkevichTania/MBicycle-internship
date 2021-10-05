import axios from "axios";
import {API_PATH} from "../../Constants";
import {IUser} from "../../Interfaces";

export default async function apiGet(){
    try {
        const response = await axios.get(`${API_PATH.BASE}`);
        const usersArray:IUser[] = response.data;
        return usersArray;
    }catch (e) {
        console.log(e)
        return [];
    }

}