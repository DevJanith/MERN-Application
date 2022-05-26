import axios from 'axios';

const API = axios.create({
    baseURL: "https://mern-stack-backend-v1.herokuapp.com"
})


export const fetchTutorials = () => API.get(`/tutorial`);
export const createTutorial = (newTutorial) => API.post(`/tutorial`, newTutorial);
export const deleteTutorial = (id) => API.delete(`/tutorial/${id}`);
export const updateTutorial = (id, updateTutorial) => API.patch(`/tutorial/${id}`, updateTutorial);




