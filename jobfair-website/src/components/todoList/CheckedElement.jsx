import React from 'react';
import 'antd/dist/antd.min.css';
import { Checkbox } from 'antd';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const CheckedElement = ({value}) => <Checkbox onChange={onChange}>{value}</Checkbox>;

export default CheckedElement;