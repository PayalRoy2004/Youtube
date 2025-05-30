import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserIcon from './UserIcon';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Hamburger />
        <Logo />
      </div>

      <div className="flex-1 mx-10">
        <SearchBar />
      </div>

      <div className="flex items-center">
        <UserIcon />
      </div>
    </div>
  );
};

export default Navbar;
