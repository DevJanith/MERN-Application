import axios from 'axios';

//local-host URL
const API = axios.create({
    //local-host URL
    // baseURL: "http://localhost:5000"
    baseURL: "https://mern-stack-project-1.herokuapp.com"
})


export const fetchTutorials = () => API.get(`/tutorial`);
export const createTutorial = (newTutorial) => API.post(`/tutorial`, newTutorial);
export const deleteTutorial = (id) => API.delete(`/tutorial/${id}`);
export const updateTutorial = (id, updateTutorial) => API.patch(`/tutorial/${id}`, updateTutorial);




