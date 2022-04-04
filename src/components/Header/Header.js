import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-gray-900'>
            <div onClick={() => setOpen(!open)} className='w-8 ml-auto py-2 text-white md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`w-full text-3xl bg-gray-900 absolute ${open ? 'top-9' : 'top-[-200px]'} duration-200 ease-linear md:static md:flex justify-center pt-3 pb-4 border-b-2`}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/charts">Charts</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
            </nav>
        </div >
    );
};

export default Header;