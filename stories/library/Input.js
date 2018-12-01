import React from 'react';

const Input = ({ className = '', type = 'text', value = '', ...props }) => (
    <input {...props} className={`${className} ba pa2 w-100`} type={type} value={value} style={{ borderColor: 'rgb(163, 166, 170)', borderRadius: '2px' }} />
);

export default Input;
