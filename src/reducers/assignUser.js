import { ASSIGN_USER } from '../actions/constants';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
	    case ASSIGN_USER:
	        return action.users;
	    default:
	        return state;
    }
};
