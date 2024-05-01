import React, { useState, useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { GrMenu } from 'react-icons/gr';
import Sidebar from './sidebar/Sidebar';
import useClickOutside from '../../hooks/useClickOutside';
import { Link, useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [query, setQuery] = useState('');

    const searchRef = useRef(null);

    const closeSearchbar = () => {
        if (isSearchOpen) {
            setIsSearchOpen(false);
        }
    };


    useClickOutside(searchRef, closeSearchbar);

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const searchHandler = (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && query.length > 0) {
            e.preventDefault();
            navigate(`/search/${query}`);
            setQuery('');
            setIsSearchOpen(false);
        } else if (e.type === 'click' && query.length > 0) {
            navigate(`/search/${query}`);
            setQuery('');
            setIsSearchOpen(false);
        }
    };


    return (
        <header className="bg-gradient-to-r from-black to-transparent md:py-0 py-2 px-6 flex justify-between items-center z-10">
            <Link to="/" className={`text-teal-500 text-lg font-bold cursor-pointer `}
            >Movie Matrix</Link>
            <div className="text-white md:flex hidden font-bold cursor-pointer ">
                <NavLink
                    to='/explore/movie'
                    className={({ isActive }) =>
                        `mx-2 p-4 cursor-pointer border-b-2 border-black transition-all ease-in duration-100 ${isActive ? 'text-teal-500 border-b-teal-500' : 'text-white hover:text-teal-500 hover:border-b-teal-500'
                        }`
                    }
                    aria-current="page"
                >
                    Movies
                </NavLink>

                <NavLink
                    to='/explore/tv'
                    className={({ isActive }) =>
                        `mx-2 p-4 cursor-pointer border-b-2 border-black transition-all ease-in duration-100 ${isActive ? 'text-teal-500 border-b-teal-500' : 'text-white hover:text-teal-500 hover:border-b-teal-500'
                        }`
                    }
                    aria-current="page"
                >
                    Shows
                </NavLink>
                <NavLink
                    to='/explore/trending'
                    className={({ isActive }) =>
                        `mx-2 p-4 cursor-pointer border-b-2 border-black transition-all ease-in duration-100 ${isActive ? 'text-teal-500 border-b-teal-500' : 'text-white hover:text-teal-500 hover:border-b-teal-500'
                        }`
                    }
                    aria-current="page"
                >
                    Trending
                </NavLink>
            </div>

            <div className='flex items-center'>
                {/* searchbar on md device */}
                <div className='items-center flex '>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchHandler}
                        className={`px-4 py-2 rounded-md bg-teal-960 text-white focus:outline-none sm:block hidden`}
                    />
                    <button className={`${isSearchOpen ? 'sm:block hidden' : 'block'} ml-2 px-4 py-2 bg-teal-500 text-white rounded-md `}
                        onClick={(e) => {
                            setIsSearchOpen(true);
                            searchHandler(e);
                        }}
                    >
                        <RiSearchLine />
                    </button>
                </div>
                {/* searchbar on small device  */}
                <div ref={searchRef} className={`absolute ${isSearchOpen ? 'top-12 opacity-100' : '-top-32 opacity-0'} left-0 right-0 bg-black p-3 z-20 transition-all duration-200 ease-in-out sm:hidden block w-full`}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchHandler}
                        className="border border-black rounded-md py-1 text-md text-white sm:py-2 px-4 focus:outline-none focus:border-teal-500 bg-teal-960 w-[82%] "
                    />
                    <button className={`absolute ml-2 px-4 py-2 bg-teal-500 text-white rounded-md `}
                        onClick={(e) => {
                            setIsSearchOpen(true);
                            searchHandler(e);
                        }}
                    >
                        <RiSearchLine />
                    </button>
                </div>

                {/* hamburger */}
                <div className="ml-2 md:hidden block"
                    onClick={() => setIsSidebarOpen(true)}>
                    <GrMenu className="text-white text-xln" />
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </header>
    );
};

export default Header;
