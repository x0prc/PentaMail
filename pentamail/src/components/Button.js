import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Button = ({ children, onClick }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
