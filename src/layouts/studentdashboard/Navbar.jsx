import { useState } from "react";
import logo from "../../components/StudentDashboard/images/schoolpadi-logo.svg";

import searchIcon from "../../components/StudentDashboard/images/search-icon.svg";
import cancelSearch from "../../components/StudentDashboard/images/cancel.svg";
import { Link, NavLink } from "react-router-dom";
import calenderIcon from "../../components/StudentDashboard/images/calendar.svg";
import notificationIcon from "../../components/StudentDashboard/images/notification.svg";
import userIcon from "../../components/StudentDashboard/images/profile.svg"; // Updated icon
import loudSpeaker from "../../components/StudentDashboard/images/loudspeaker.svg";
import Menu from "../../components/StudentDashboard/images/menu.svg";
// import menuIcon from "../images/menu.svg"; // Add a menu icon for hamburger
// import closeIcon from "../images/close.svg"; // Close icon for the side menu

const Navbar = ({ marginTop }) => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const [user, setUser] = useState("Name");

  const features = [
    { src: notificationIcon, alt: "Notification" },
    { src: loudSpeaker, alt: "" },
    { src: userIcon, alt: "User" },
  ];

  const navItems = [
    { name: "Dashboard", path: "StudentDashboard" },
    {
      name: "Academic Management",
      path: "StudentDashboard/academic-management",
    },
    { name: "Finance", path: "StudentDashboard/finance" },
    {
      name: "Schedule/Communication",
      path: "StudentDashboard/schedule-communication",
    },
    {
      name: "Learning Management System",
      path: "StudentDashboard/learning-management-system",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [currentLink, setCurrentLink] = useState("Dashboard");

  // -mb-[${
  //       marginTop ? marginTop : "65px"
  //     }]

  return (
    <div
      className={`bg-schoolpadi-nav text-white pt-[32px] pb-[120px] px-[20px] md:px-[52px] w-full`}
    >
      {/* top navbar */}
      <div className="top-nav pb-[32px] flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="schoolpadi bg-white p-1 flex-shrink-0">
            <Link to={"/"}>
              <img
                loading="lazy"
                decoding="async"
                src={logo}
                width={36}
                height={36}
                alt={"schoolpadi logo"}
              />
            </Link>
          </div>
          <span className="ml-6">School Name</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="search-schoolpadi time-search-none w-full max-w-[250px] md:max-w-[375px]">
            <div className="flex items-center w-full bg-white px-3 rounded-md">
              <img
                loading="lazy"
                decoding="async"
                src={searchIcon}
                alt="search"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full placeholder:text-[#015AB5] text-sm lg:text-[16px] text-[#015AB5] bg-transparent caret-[#015AB5] px-4 py-2 outline-none border-none"
                  placeholder="Search"
                />
              </div>
              <div
                className={`${search === "" ? "opacity-0" : "cancel-search"}`}
              >
                <button type="button" onClick={handleClearSearch}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={cancelSearch}
                    className="mt-2"
                    alt={"clear search"}
                  />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="block md:hidden p-2 rounded-md bg-schoolpadi-blue-transparent"
          >
            {/* <img src={menuIcon} alt="menu" /> */}
            <img src={Menu} alt="open" />
          </button>
        </div>

        <div className="hidden md:block schoolpadi-features flex-shrink-0">
          <div className="features w-full flex items-center gap-7">
            {features.map((feature, index) => (
              <div key={index} className="w-9 h-9">
                <div className="rounded-full grid place-items-center cursor-pointer w-full h-full bg-white">
                  <img
                    src={feature.src}
                    alt={feature.alt}
                    width={24}
                    loading="lazy"
                    decoding="async"
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* middle Nav */}
      <div className="middle-nav">
        <div className="flex wrap-middle-nav items-center justify-between gap-5">
          <div className="user text-white text-[24px] md:text-[32px] font-medium">
            Welcome, {user}
          </div>
          <div className="calender">
            <div className="flex items-center gap-[12px]">
              <div className="w-9 h-9">
                <div className="rounded-full grid place-items-center cursor-pointer w-full h-full bg-white">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={calenderIcon}
                    alt="calendar"
                  />
                </div>
              </div>
              <span className="text-white">12th July 2024</span>
              <div className="bg-white rounded-full h-2 w-2"></div>
              <span className="text-white">09:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* third Nav */}
      <div className="mt-8 py-[10px]">
        <div className="items-start active-links hidden">
          <div className="flex font-medium text-sm cursor-pointer flex-col items-center gap-[2px]">
            <span
              className={`${
                true && "bg-white text-[#01356B] py-2 px-4 rounded-lg mb-1"
              }`}
            >
              {currentLink}
            </span>
            <div className="rounded-full h-2 w-2 bg-white"></div>
          </div>
        </div>

        {/* navLinks */}

        <div className="flex gap-4 flex-col md:flex-row other-link items-center justify-between">
          {navItems.map((navItem) => (
            <div
              key={navItem.path}
              className="flex flex-col items-center justify-between"
            >
              <NavLink
                to={navItem.path}
                end
                className={({ isActive }) =>
                  `relative flex font-medium text-sm py-2 cursor-pointer flex-col items-center gap-[2px] px-4 ${
                    isActive
                      ? "bg-white text-[#01356B] px-4 rounded-lg mb-2"
                      : "text-white"
                  }`
                }
              >
                <p>{navItem.name}</p>
              </NavLink>
              <div className="rounded-full h-2 w-2 bg-white"></div>
            </div>
          ))}
        </div>

        {/* ///// */}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[100%] h-full bg-schoolpadi-nav z-50 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="bg-white p-1 flex-shrink-0">
            <img src={logo} alt="logo" className="w-[36px] h-[36px]" />
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 bg-schoolpadi-blue-transparent rounded-lg"
          >
            <img src={Menu} alt="close menu" />
          </button>
        </div>
        <div className="search-schoolpadi p-4 w-full">
          <div className="flex items-center w-full bg-white px-3 rounded-md">
            <img
              loading="lazy"
              decoding="async"
              src={searchIcon}
              alt="search"
            />
            <div className="flex-1">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                className="w-full placeholder:text-[#015AB5] text-sm lg:text-[16px] text-[#015AB5] bg-transparent caret-[#015AB5] px-4 py-2 outline-none border-none"
                placeholder="Search"
              />
            </div>
            <div className={`${search === "" ? "opacity-0" : "cancel-search"}`}>
              <button type="button" onClick={handleClearSearch}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={cancelSearch}
                  className="mt-2"
                  alt={"clear search"}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" className="text-white">
            Dashboard
          </Link>
          <Link to="/academic-management" className="text-white">
            Academic Management
          </Link>
          <Link to="/finance" className="text-white">
            Finance
          </Link>
          <Link to="/schedule-comm" className="text-white">
            Schedule/Communication
          </Link>
          <Link to="/learning-management" className="text-white">
            Learning Management System
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
