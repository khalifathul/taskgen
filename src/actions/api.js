import axios from 'axios';
import { token, company_id, BaseURL } from '../config';

export default {
    getTask: {
        getTaskData: () =>
            axios.get(`${BaseURL}?company_id=${company_id}`, {
                headers: { 'Authorization': token }
            }).then(res => res),
    },
    singleTask: {
        singleTaskData: (taskId) =>
            axios.get(`${BaseURL}/${taskId}?company_id=${company_id}`, {
                headers: { 'Authorization': token }
            }).then(res => res),
    },
    addTask: {
        addTaskData: (data) => 
            axios.post(`${BaseURL}?company_id=${company_id}`, data, {
                 headers: { 'Authorization': token }
            }).then(res => res),      
    },
    editTask: {
        editTaskData: (data, task_id) => 
            axios.put(`${BaseURL}/${task_id}?company_id=${company_id}`, data, {
                 headers: { 'Authorization': token }
            }).then(res => res),      
    },
    deleteTask: {
        deleteTaskData: (task_id) => 
            axios.delete(`${BaseURL}/${task_id}?company_id=${company_id}`, {
                 headers: { 'Authorization': token }
            }).then(res => res),      
    },
    assignUser: {
        assignUserData: () =>
            axios.get(`https://stage.api.sloovi.com/team?company_id=${company_id}&product=outreach`, {
                headers: { 'Authorization': token }
            }).then(res => res),
    },
};
    
