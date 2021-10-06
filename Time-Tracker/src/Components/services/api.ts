import axios from "axios";
import {API_PATH} from "Constants";
import {IUser} from "Interfaces";

export async function apiGetUsersArray():Promise<IUser[]>{
    try {
        const response = await axios.get(`${API_PATH.BASE}`);
        return response.data;
    }catch (e) {
        throw e;
    }

}
