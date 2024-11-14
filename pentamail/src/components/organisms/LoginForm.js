import React, { useState } from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/email/send', {
                recipient: email,
                subject: 'Welcome!',
                message: `Hello ${email}, welcome to our service!`,
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send email.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup label="Email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormGroup label="Password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Send Email</Button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default LoginForm;
