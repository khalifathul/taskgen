import { combineReducers } from 'redux';
import addTask from './addTask';
import editTask from './editTask';
import getTask from './getTask';
import singleTask from './singleTask';
import deleteTask from './deleteTask';
import assignUser from './assignUser';

export default combineReducers({
    addTask,
    editTask,
    getTask,
    singleTask,
    deleteTask,
    assignUser,
});
