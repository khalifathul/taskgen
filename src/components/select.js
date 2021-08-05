import React from 'react';

const style = {
  paddingLeft: 5, 
  height: 36,
  marginBottom: 10, 
  width: '100%'
}

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {
    const { options, value } = this.props;
    return (
      <>
        <p style={{paddingBottom: 1, margin: 0}}>Assign user</p>
        <select value={value} onChange={this.handleChange} style={style}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>
      </>
    );
  }
}

export default Select;