import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.constants';

export default (tutorials = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; 
        case CREATE:
            return [...tutorials, action.payload];
        case UPDATE:
            return tutorials.map((tutorial) => (tutorial._id === action.payload._id ? action.payload : tutorial));
        case DELETE:
            return tutorials.filter((tutorial) => tutorial._id !== action.payload);
        default:
            return tutorials;
    }
};