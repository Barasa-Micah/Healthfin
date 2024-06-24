import React, {useState, useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";

//react icons
import { IoMenu, IoClose  } from "react-icons/io5";


const NavSm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className='bg-[#D9D9D9] w-full'>
            <div className='flex justify-between h-[60px]'>
                <div className='w-[60px]'>
                    <Link to="/">
                        <img src={require('../../Assets/Logo/logo.jpg')} alt='logo' className='w-full h-full' />
                    </Link>
                </div>
                {/* <div className='text-5xl my-auto mr-4' onClick={toggleMenu}>
                    <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                </div> */}
                <div className='text-5xl my-auto mr-4' onClick={toggleMenu}>
                    {isOpen ? <IoClose /> : <IoMenu />}
                </div>
            </div>
            <div className='relative'>
                <div
                    className={`absolute h-screen w-full  right-0 bg-white text-black z-50 transition-all duration-500 overflow-hidden origin-top-right ${isOpen ? ' sclae-100 ' : 'scale-0'}`}
                >
                   <ul className='flex flex-col justify-center font-light space-y-[25px] p-3 w-[80%] pt-[40px] mx-auto text-xl text-left'>
                        <li>
                            <NavLink to="/" exact onClick={closeMenu} className="no-underline" activeClassName="font-bold">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus" onClick={closeMenu} className="no-underline" activeClassName="font-bold">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/loans" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Loans</NavLink>
                        </li>
                        <li>
                            <NavLink to="" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Insurance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/expenses" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Expense</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin" onClick={closeMenu}>
                                <button className='border bg-[#0F324B] text-white px-7 py-1 rounded-full'>Sign In</button>
                            </NavLink>
                        </li>
                    </ul>
                    <div className='relative bottom-0 mt-[30px]'>
                        <ul className='flex justify-center items-center space-x-[50px] text-gray-600'>
                            <li>
                                <a href='https://www.facebook.com/'>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/'>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com'>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavMd = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                closeMenu();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className='bg-[#D9D9D9] z-50 relative'>
                <div className='flex justify-between'>
                    <div className='w-[90px]'>
                        <Link to="/">
                            <img src={require('../../Assets/Logo/logo.jpg')} alt='logo' className='w-full h-full' />
                        </Link>
                    </div>
                    {/* <div className='text-7xl my-auto mr-4' onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div> */}
                    <div className='text-7xl my-auto mr-4' onClick={toggleMenu}>
                    {isOpen ? <IoClose /> : <IoMenu />}
                    </div>
                </div>
                <div className='relative'>
                <div
                    className={`absolute h-screen w-full  right-0 bg-white text-black z-50 transition-all duration-500 overflow-hidden origin-top-right ${isOpen ? ' sclae-100 ' : 'scale-0'}`}
                >
                    <ul className='flex flex-col justify-center font-light space-y-[25px] p-3 w-[80%] pt-[40px] mx-auto text-xl text-left'>
                        <li>
                            <NavLink to="/" exact onClick={closeMenu} className="no-underline" activeClassName="font-bold">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus" onClick={closeMenu} className="no-underline" activeClassName="font-bold">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/loans" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Loans</NavLink>
                        </li>
                        <li>
                            <NavLink to="" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Insurance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/expenses" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Expense</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeMenu} className="no-underline" activeClassName="font-bold">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin" onClick={closeMenu}>
                                <button className='border bg-[#0F324B] text-white px-7 py-1 rounded-full'>Sign In</button>
                            </NavLink>
                        </li>
                    </ul>

                    <div className='relative bottom-0 mt-[30px]'>
                        <ul className='flex justify-center items-center space-x-[50px] text-gray-600'>
                        <li>
                                <a href='https://www.facebook.com/'>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/'>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com'>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <nav className='bg-[#D9D9D9] h-[90px] w-full flex justify-between'>
                <div className='w-[90px] h-[90px]'>
                    <Link to="/">
                        <img src={require('../../Assets/Logo/logo.jpg')} alt='' className='w-full h-full' />
                    </Link>
                </div>
                <div className='my-auto'>
                <ul className='flex space-x-[20px] font-Menu text-lg mr-4'>
                    <li>
                        <NavLink to="/" exact className="no-underline" activeClassName="font-bold">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus" className="no-underline" activeClassName="font-bold">
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/loans" className="no-underline" activeClassName="font-bold">
                            Loans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" className="no-underline" activeClassName="font-bold">
                            Insurance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/expenses" className="no-underline" activeClassName="font-bold">
                            Expenses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="no-underline" activeClassName="font-bold">
                            Contact us
                        </NavLink>
                    </li>
                    <li className='my-auto'>
                        <NavLink to="/signin">
                            <button className='border bg-[#0F324B] text-white px-7 py-1 rounded-full my-auto'>Sign In</button>
                        </NavLink>
                    </li>
                </ul>

                </div>
            </nav>
        </>
    );
};


const NavBar = () => {
  return (
    <>
        <div className='md:hidden'>
            <NavSm />
        </div>
        <div className='hidden md:block lg:hidden'>
            <NavMd />
        </div>
        <div className='hidden lg:block'>
            <NavLg />
        </div>
    </>
  );
};

export default NavBar;
