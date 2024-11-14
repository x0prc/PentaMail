import React from 'react';
import Input from '../atoms/Input';

const FormGroup = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default FormGroup;
