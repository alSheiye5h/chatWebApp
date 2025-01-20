import axios from "axios";


export const Login = async (url, method, headers, data) => {
    try {
        const response = await axios({
            url,
            method,
            headers,
            data
        });
        return response        
    } catch {
        console.error('API Error:', error.response || error.message);
        throw error.response?.data || error.message;
    }
}


