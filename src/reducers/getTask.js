import { GET_TASK } from '../actions/constants';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
	    case GET_TASK:
	        return action.task;
	    default:
	        return state;
	}
};
