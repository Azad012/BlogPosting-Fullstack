import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 ">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className='flex justify-between items-center'>
                    <div className='text-xl font-bold'>
                    <Link to="/" className="hover:text-gray-200">BlogWebApp</Link>
                    </div>
                <div className=" hidden md:flex space-x-4">
                <ul className="flex space-x-4 text-xl font-bold" >
                    <li><Link to="/" className=' hover:text-gray-200'>Home</Link></li>
                    <li><Link to="/CreatePost" className=' hover:text-gray-200'> Create Post</Link></li>
                    <li ><Link to="/contact" className=' hover:text-gray-200'>Contact</Link></li>
                    <li ><Link to="/about" className=' hover:text-gray-200'>About </Link></li>
                    <li ><Link to="/login" className=' hover:text-gray-200'>Login</Link></li>
                    <li ><Link to="/register" className=' hover:text-gray-200'>Register</Link></li>
                    <li ><Link to="/Dashboard" className=' hover:text-gray-200'>Dashboard</Link></li>
                </ul>
            </div>
            <button onClick={togggleMenu} className=' md:hidden text-gray-700 focus:outline-none'>
                {isOpen ? 'Close' : 'Menu'}
                
            </button>

                </div>
                
            </div>
            {isOpen && (
                <div className=' md:hidden bg-white shadow-md'>
                    <div className='flex flex-col space-y-2 px-4 py-2 '>
                    <ul >
                    <li ><Link to="/" className=' hover:text-gray-200'>Home</Link></li>
                    <li ><Link to="/CreatePost" className=' hover:text-gray-200'> Create Post</Link></li>
                    <li ><Link to="/contact" className=' hover:text-gray-200'>Contact</Link></li>
                    <li ><Link to="/about " className=' hover:text-gray-200'>About</Link></li>
                    <li ><Link to="/login" className=' hover:text-gray-200'>Login</Link></li>
                    <li ><Link to="/register" className=' hover:text-gray-200'>Register</Link></li>
                    <li ><Link to="/Dashboard" className=' hover:text-gray-200'>Dashboard</Link></li>
                    
                </ul>

                    </div>

                </div>
            )}
           
        </nav>
    );
};

export default Navbar;
