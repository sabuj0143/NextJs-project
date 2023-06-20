import React from 'react';
import Sidebar from './Sidebar';

export const metadata = {
    title: 'dashboard | Next Hero',
    description: 'Next Hero',
  }

const DashboardLayOutPage = ({children}) => {
    return (
        <div className='container mx-auto flex'>
            
                <Sidebar></Sidebar>
            
            {children}
        </div>
    );
};

export default DashboardLayOutPage;