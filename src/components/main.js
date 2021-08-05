import React, { useEffect } from "react";
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { assignUserAction, getTaskAction } from "../actions";

import Form from "./form";
import Table from "./table";

const card = {
  width: 400,
  borderWidth: 1,
  borderColor: '#000',
  borderStyle: 'solid',
  marginTop: 60,
  marginLeft: 60,
}

const cardTitle = {
  backgroundColor: '#ccc',
  paddingLeft: 10
}

const cardBody = {
  backgroundColor: '#d2fcfd',
  padding: 10,
}

const header = {
  backgroundColor: "#fff",
  height: 70,
  borderBottomWidth: 5,
  borderBottomStyle: 'solid',
  borderColor: "#f3f0f0"
}

const sidebar = {
  backgroundColor: "#555",
  width: '15%',
  height: '100vh'
}

const main = {
  width: '85%',
}

const wrapper = {
  display: 'flex'
}

const MainContent = (props) => {
  const { assignUserAction, assignUsers, getTaskAction, getTask, singleTask } = props;
  useEffect(() => {
    assignUserAction();
    getTaskAction();
  }, []);
  const taskArray = !isEmpty(getTask) && getTask.results;
  const singleTaskData = !isEmpty(singleTask) && singleTask.results;
  return (
    <>
      <div style={wrapper}>
        <aside style={sidebar} />
        <div style={main}>
          <header style={header} />
          <div style={card}>
            <div style={cardTitle}>
              <h5 style={{margin: 0, padding: 10}}>Task 0</h5>
            </div>
            <div style={cardBody}>
              <Form assignUsers={assignUsers} editData={singleTaskData} />
            </div>
          </div>
          {!isEmpty(taskArray) && <Table data={taskArray} />}
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  console.log(state)
  return {
    assignUsers: state.assignUser.data,
    getTask: state.getTask.data,
    singleTask: state.singleTask.data
  }
}

export default connect(mapStateToProps, { assignUserAction, getTaskAction })(MainContent);
