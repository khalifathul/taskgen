import { EDIT_TASK } from '../actions/constants';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
	    case EDIT_TASK:
	        return action.task;
	    default:
	        return state;
    }
};
