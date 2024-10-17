import axios from 'axios';
import { BASE_URL } from './constants';

const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
};

export const callApi = async (resource) => {
    try {
        const url = `${BASE_URL}/${resource}`; // Ensure no extra spaces here
        console.log('API Call URL:', url); // Log the full URL
        const { data } = await axios.get(url, config);
        return data;
    } catch (error) {
        console.error('API call error:', error.response || error.message);
        throw error; // Re-throw the error
    }
};
