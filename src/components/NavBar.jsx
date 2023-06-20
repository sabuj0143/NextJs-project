import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
]
const NavBar = () => {
    return (
        <nav className='container mx-auto flex text-center justify-between'>
            <h1 className='text-3xl font-semibold'>Next Hero</h1>
            <ul className='flex item-center justify-center'>
                {
                    navLinks.map(({ path, title }) => <li className='mx-2' key={path}>
                        <NavLink activeClassName="text-red-400" href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;