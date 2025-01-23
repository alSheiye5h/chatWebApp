import axios from "axios";
import { connectToDb } from './connectDb'

export const initial = () => {
    try {
        connectToDb();
        

    } catch (err) {
        console.log(err)
    }

}



export const Login = async (url, method, headers, data) => {
    try {
        const response = await axios({
            url,
            method,
            headers,
            data
        });
        return response        
    } catch (error) {
        console.error('API Error:', error.response || error.message);
        throw error.response?.data || error.message;
    }
}