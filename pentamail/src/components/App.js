import React from 'react';
import EmailForm from './components/EmailForm';
import CertificateForm from './components/CertificateForm';
import './styles.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>PKI Secure Email System</h1>
            </header>
            <main>
                <EmailForm />
                <CertificateForm />
            </main>
        </div>
    );
}

export default App;