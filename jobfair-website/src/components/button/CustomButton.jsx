import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.min.css';

const CustomButton = ({name, icon}) => {
  const [size, setSize] = useState('large');
  return (
    <>
      <Button type="primary" icon={icon} size={size}>
        {name}
      </Button>
    </>
  );
};

export default CustomButton;