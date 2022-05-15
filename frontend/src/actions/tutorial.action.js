import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.constants';

import * as api from '../api/index.js';

export const getTutorials = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTutorials();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createTutorial = (Tutorial) => async (dispatch) => {
    try {
        const { data } = await api.createTutorial(Tutorial);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateTutorial = (id, Tutorial) => async (dispatch) => {
    try {
        const { data } = await api.updateTutorial(id, Tutorial);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteTutorial = (id) => async (dispatch) => {
    try {
        await api.deleteTutorial(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};