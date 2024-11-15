import React from 'react';
import AuthTemplate from '../templates/AuthTemplate';
import LoginForm from '../organisms/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <h2>Login</h2>
            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;