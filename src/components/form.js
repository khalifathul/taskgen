import React from "react";
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { addTaskAction, editTaskAction } from "../actions";
import { userId } from '../config';
import Input from "./input";
import Select from "./select";

const dateWrap = {
  display: 'flex'
}

const btnWrap = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const submitBtn = {
  backgroundColor: '#5af75a',
  border: 0,
  padding: 8,
  paddingLeft: 20,
  paddingRight: 20,
  marginLeft: 5
}

const cancelBtn = {
  backgroundColor: 'transparent',
  border: 0
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_date: "",
      task_time: "",
      task_msg: "",
      assigned_user: userId,
      editId: "",
      editStatus: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.editData.id !== prevState.editData){
      return { editStatus: true, task_msg: nextProps.editData.task_msg }
    }else {
      return { editStatus: false }
    }
  }

  componentDidMount() {
    this.setState({
      editId: this.props.editData.id
    })
  }

  handleChange(e) {
    const {name,value} = e.target;
    this.setState({ [name]:value });
  }

  handleEdit(e){
    e.preventDefault();
    const { task_msg, editId } = this.state;
    const { editData } = this.props;
    const taskData = {
      "assigned_user": editData.assigned_user,
      "task_date": editData.task_date,
      "task_msg": task_msg,
      "task_time": editData.task_time,
      "is_completed": 1,
      "time_zone": editData.time_zone,
    }
    this.props.editTaskAction(taskData, editId).then(res => {
      alert("Succesfully updated")
      this.setState({
        task_date: "",
        task_time: "",
        task_msg: "",
        editStatus: false
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const { task_date, task_time, task_msg, assigned_user } = this.state;

    let time = new Date(task_date);
    const timeZone = -time.getTimezoneOffset()*60;
    const timeInt = task_time.split (':').reduce((seconds, v) => {
      return +v + seconds * 60;
    }, 0) / 60;
    const timeInSeconds = Number(timeInt) * 86400;
    const taskData = {
      "assigned_user": assigned_user,
      "task_date": task_date,
      "task_msg": task_msg,
      "task_time": timeInSeconds,
      "is_completed": 1,
      "time_zone": timeZone,
    }
    this.props.addTaskAction(taskData).then(res => {
      alert("Succesfully created")
      this.setState({
        task_date: "",
        task_time: "",
        task_msg: "",
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const { assignUsers } = this.props;
    const { task_date, task_time, task_msg, editStatus } = this.state;
    const userArray = [];
    const userData = !isEmpty(assignUsers) && !isEmpty(assignUsers.results) && assignUsers.results.data;
    const filterUser = !isEmpty(userData) && userData.filter(el => el.user_status === "accepted");
    if(!isEmpty(userData)) {
      filterUser.forEach(item => {
        userArray.push({
          "label": item.name,
          "value": item.user_id,
        })
      });
    } 
    return (
      <div>
          <form>
            <Input
              label="Task Description"
              type="text"
              name="task_msg"
              value={task_msg}
              onChange={this.handleChange}
              />
            <div style={dateWrap}>
              <Input
                label="Date"
                type="date"
                name="task_date"
                value={task_date}
                onChange={this.handleChange}
                />
              <Input
                label="Time"
                type="time"
                name="task_time"
                value={task_time}
                onChange={this.handleChange}
                />
            </div>
            <Select options={userArray} />
            <div style={btnWrap}>
              <button style={cancelBtn}>Cancel</button>
              {editStatus ? <button onClick={this.handleEdit} style={submitBtn}>Update</button>:<button onClick={this.handleSubmit} style={submitBtn}>Save</button>}
            </div>
          </form>
      </div>
    );
  }
}

export default connect(null, { addTaskAction, editTaskAction })(Form);

