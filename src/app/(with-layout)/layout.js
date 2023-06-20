import NavBar from '@/components/NavBar';
import React from 'react';

const WithLayOut = ({ children }) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayOut;