import React from 'react';

const style = {
	paddingLeft: 5, 
	height: 34,
	marginBottom: 10,
	width: '97%',
	marginRight: 10
}
const Input = (props) => {
  const { onChange, name, type, value, label } = props;
  return <label style={{width: '97%'}}>
    	{label}<br/>
    	<input style={style} onChange={onChange} name={name} type={type} value={value} />
  </label>
}

Input.defaultProps = {
  type:"text",
  onChange: () => {}
}

export default Input;