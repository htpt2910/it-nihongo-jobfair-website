import React from 'react';
import 'antd/dist/antd.min.css';

const ToDoItems = (props) => {
  return (
    <li  onClick={() => {
      props.onChecked(props.id);
    }}
  >
    {props.text}
    </li>
  )}

export default ToDoItems;