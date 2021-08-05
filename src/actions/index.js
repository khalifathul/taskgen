import { ADD_TASK, EDIT_TASK, GET_TASK, SINGLE_TASK, DELETE_TASK, ASSIGN_USER } from './constants';
import api from './api';

export const addTask = task => ({
    type: ADD_TASK,
    task,
});

export const addTaskAction = (data) => dispatch =>
    api.addTask.addTaskData(data).then(resData => dispatch(addTask(resData)));

export const editTask = task => ({
    type: EDIT_TASK,
    task,
});

export const editTaskAction = (data, task_id) => dispatch =>
    api.editTask.editTaskData(data, task_id).then(resData => dispatch(editTask(resData)));

export const getTask = task => ({
    type: GET_TASK,
    task,
});

export const getTaskAction = () => dispatch =>
    api.getTask.getTaskData().then(resData => dispatch(getTask(resData)));

export const singleTask = task => ({
    type: SINGLE_TASK,
    task,
});

export const singleTaskAction = (task_id) => dispatch =>
    api.singleTask.singleTaskData(task_id).then(resData => dispatch(singleTask(resData)));

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  task,
});

export const deleteTaskAction = (task_id) => dispatch => {
  api.deleteTask.deleteTaskData(task_id).then(resData => dispatch(deleteTask(resData)));
};

export const assignUser = users => ({
    type: ASSIGN_USER,
    users,
});

export const assignUserAction = () => dispatch =>
    api.assignUser.assignUserData().then(resData => dispatch(assignUser(resData)));

