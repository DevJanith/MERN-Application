import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000"
})


export const fetchTutorials = () => API.get(`/tutorial`);
export const createTutorial = (newTutorial) => API.post(`/tutorial`, newTutorial);
export const deleteTutorial = (id) => API.delete(`/tutorial/${id}`);
export const updateTutorial = (id, updateTutorial) => API.patch(`/tutorial/${id}`, updateTutorial);




