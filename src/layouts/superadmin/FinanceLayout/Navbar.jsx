import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { name: 'Dashboard', path: '/superadmin/finance/dashboard' },
    { name: 'Information System', path: '/superadmin/finance/information-system' },
    { name: 'Schedules/Comms', path: '/superadmin/finance/schedules-comms' },
    { name: 'Graduation/Alumni', path: '/superadmin/finance/graduation-alumni' },
    { name: 'Finance/Accounting', path: '/finance-accounting' },
    { name: 'People/Productivity', path: '/people-productivity' },
    { name: 'Marketing And Admissions', path: '/marketing-admissions' },
    { name: 'Administrations', path: '/reports' },
  ];

  return (
    <nav className="flex justify-between ">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end
          className={({ isActive }) =>
            `relative py-2 px-4  ${
              isActive ? 'bg-white text-[#01356B] rounded-xl font-bold' : 'text-white'
            }`
          }
        >
            <p>
              {item.name}
            </p>
        
          { <div className=" bg-white absolute   left-1/2 right-0 rounded-full w-2 h-2 mt-3"></div>}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
