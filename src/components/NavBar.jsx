import React, { useState, useEffect } from 'react'

import logo from '../assets/Icon.png'
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (Window.scrollY > 100) {

                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    const navItems = [

        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FQA", path: "fqa" },



    ]

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className='flex justify-between text-base gap-8'>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>NEXCENT</span>
                    </a>
                    {/* Nav Item for the large devise */}
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-gray900
                             hover:text-BrandPrimary first:font-medium'>{link}</Link>)
                        }

                    </ul>

                    {/* button for large divices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-BrandPrimary hover:text:gray900 '>Login</a>
                        <button className='bg-BrandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-NeutralDGrey
                        '>Sign up</button>
                    </div>

                    {/* menu button for small devices-mobile */}

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-NeutralDGrey focus:outline-none focus:test-gray-500 '>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 ' />)
                            }
                        </button>

                    </div>
                </div>

                {/* Items for mobile nav links */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-BrandPrimary ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-white 
                             hover:text-BrandPrimary first:font-medium'>{link}</Link>)
                    }
                </div>
            </nav>

        </header>
    )
}

export default NavBar
