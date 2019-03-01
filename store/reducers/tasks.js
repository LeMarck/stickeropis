import { handleActions } from 'redux-actions';

import { STORE_TASKS } from '../constants/tasks';

function storeTasks(state, action) {
    return { ...state, list: action.tasks };
}

export default handleActions(
    {
        [STORE_TASKS]: storeTasks
    },
    {
        list: []
    }
);
