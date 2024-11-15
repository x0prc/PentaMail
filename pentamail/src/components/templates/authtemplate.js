import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const AuthTemplate = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default AuthTemplate;