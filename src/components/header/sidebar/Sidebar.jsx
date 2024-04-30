import React, { useRef } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import useClickOutside from '../../../hooks/useClickOutside';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, onClose);

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 h-full w-64 bg-teal-980 text-white transition-all  duration-300 ease-in-out ${isOpen ? 'right-0' : '-right-80'} z-30`}
    >
      <div className="flex justify-end p-4">
        <button className="focus:outline-none" onClick={handleClose}>
          <RiCloseLine className="text-white text-2xl" />
        </button>
      </div>

      {/* Sidebar content */}

      <div className='flex flex-col' >
        <NavLink
          to='/explore/movie'
          className={({ isActive }) =>
            `p-3 m-3 font-bold hover:text-black  hover:bg-teal-500 transition-colors ease-in duration-100 ${isActive ? ' bg-teal-500 text-black' : 'text-white bg-teal-950'
            }`
          }
          onClick={handleClose}
        >
          Movies
        </NavLink>

        <NavLink
          to='/explore/tv'
          className={({ isActive }) =>
            `p-3 m-3 font-bold hover:text-black  hover:bg-teal-500 transition-colors ease-in duration-100 ${isActive ? ' bg-teal-500 text-black' : 'text-white bg-teal-950'
            }`
          }
          onClick={handleClose}
        >
          Shows
        </NavLink>

        <NavLink
          to='/explore/trending'
          className={({ isActive }) =>
            `p-3 m-3 font-bold hover:text-black  hover:bg-teal-500 transition-colors ease-in duration-100 ${isActive ? ' bg-teal-500 text-black' : 'text-white bg-teal-950'
            }`
          }
          onClick={handleClose}
        >
          Trending
        </NavLink>
      </div>

    </div>
  );
};

export default Sidebar;
