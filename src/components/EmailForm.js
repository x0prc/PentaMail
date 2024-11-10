import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSendEmail = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/email/send', { recipient, subject, message });
            alert('Email sent successfully!');
        } catch (error) {
            alert('Error sending email');
        }
    };

    return (
        <form onSubmit={handleSendEmail} className="form">
            <h2>Send Email</h2>
            <input type="email" placeholder="Recipient" onChange={e => setRecipient(e.target.value)} required />
            <input type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)} required />
            <textarea placeholder="Message" onChange={e => setMessage(e.target.value)} required></textarea>
            <button type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;