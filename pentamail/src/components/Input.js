import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
};

export default Input;
