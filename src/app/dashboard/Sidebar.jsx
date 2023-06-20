import Link from 'next/link';
import React from 'react';

const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/',
        title: 'Home'
    },
]
const Sidebar = () => {
    return (
        <aside className='mr-10 '>
            <h2 className='txt-3xl font-semibold'>Dashboard</h2>
            <ul>
                {
                    navLinks.map(({path, title}) => <li key={path}>
                        <Link href={path}>{title}</Link>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;