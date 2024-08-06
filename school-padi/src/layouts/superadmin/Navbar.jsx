import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { name: 'Dashboard', path: '/superadmin' },
    { name: 'User Management', path: '/user-management' },
    { name: 'Finance', path: '/finance' },
    { name: 'Reports', path: '/reports' },
  ];

  return (
    <nav className="flex justify-between ">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative py-2 px-4 text-white ${
              isActive ? 'bg-white text-blue-900 rounded-xl font-bold' : ''
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.name}
              {isActive && <div className=" bg-white rounded-full w-2 h-2 mt-1"></div>}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
