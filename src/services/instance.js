import axios from "axios";

// Define base url for the api
const baseURL = "https://todo-be-8wyk.onrender.com/api/v1";

// Define the instance
const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: { 
        "Content-Type": "application/json"
    },
    withCredentials: true
});

export default instance;