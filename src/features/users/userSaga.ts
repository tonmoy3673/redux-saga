import axios from "axios";


const baseUrl = 'https://jsonplaceholder.typicode.com/users';

// ============ fetchUserApi ================

const fetchUserApi =()=>{
    return axios.get(baseUrl);
};

// ============= generator function =========//
