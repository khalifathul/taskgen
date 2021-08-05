import React from 'react';
import { connect } from "react-redux";
import { deleteTaskAction, singleTaskAction } from "../actions";

class Table extends React.Component {

  handleDelete(id) {
    this.props.deleteTaskAction(id);
    alert("Deleted Succesfully")
  }

  handleEdit(id) {
    this.props.singleTaskAction(id);
  }

  render() {
    const { data } = this.props;
    return (
      <table style={{width:400, marginLeft: 60}}>
        <tr style={{textAlign:"left"}}>
          <th>Task</th>
          <th>Date</th>
        </tr>
        {data.map((el, key) => (
          <tr key={el.id}>
            <td>{el.task_msg}</td>
            <td>{el.task_date}</td>
            <td><button onClick={this.handleDelete.bind(this, el.id)}>Delete</button></td>
            <td><button onClick={this.handleEdit.bind(this, el.id)}>Edit</button></td>
          </tr>
        ))}
      </table>
    )
  }
}

export default connect(null, { deleteTaskAction, singleTaskAction })(Table);