import React, { useState } from 'react';
import axios from 'axios';

function CertificateForm() {
    const [email, setEmail] = useState('');

    const handleRequestCertificate = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/certificate/request', { email });
            alert('Certificate requested successfully!');
        } catch (error) {
            alert('Error requesting certificate');
        }
    };

    return (
        <form onSubmit={handleRequestCertificate} className="form">
            <h2>Request Certificate</h2>
            <input type="email" placeholder="Your Email" onChange={e => setEmail(e.target.value)} required />
            <button type="submit">Request Certificate</button>
        </form>
    );
}

export default CertificateForm;