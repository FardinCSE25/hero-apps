import React from 'react';
import { Link, NavLink } from 'react-router';
import '../../src/App.css'

const Navbar = () => {
    const links = <>
        <NavLink to='/'><li className="mr-12">Home</li></NavLink>
        <NavLink to='/apps'><li className="mr-12">Apps</li></NavLink>
        <NavLink to='/installation'><li className="mr-12">Installation</li></NavLink>
    </>
    return (
        <div className='shadow-sm'>
            <div className="navbar bg-base-100 w-15/16 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text"><img className='w-[40px] h-[40px]' src="/src/assets/logo.png" alt="webapp logo" />Hero.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/FardinCSE25" target="_blank" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><img className='w-[20px] h-[20px]' src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png" alt="github logo" /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;