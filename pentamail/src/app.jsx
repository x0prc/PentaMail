import React from 'react';
import LoginPage from './components/pages/LoginPage';
import { GlobalStyle } from './styles'; 

const App = () => {
    return (
        <>
            <GlobalStyle /> {/* Apply global styles */}
            <LoginPage />
        </>
    );
};

export default App;