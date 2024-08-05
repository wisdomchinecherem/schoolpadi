import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logowhite } from "../../assets/img/img";
import {
} from "@heroicons/react/outline";



const Footer = () => {
  return (
    <footer className=" bg-[#084DAE] py-6">

     
<motion.div
          initial={{ x: -1000 }} // Initial position outside the vie wport
          animate={{ x: 0 }} // Final position at x=0 (left to right)
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }} // Animation duration and repeat every 5 seconds
        >
      <div className="text-white font-[500] sm:font-bold text-2xl sm:text-3xl px-11 border-b border-b-[#000000] py-6">Empowering You For Global Excellence</div>
      </motion.div>


      <div className="container  mx-auto flex justify-between items-center">
        {/* Columns */}
        <div className="flex flex-wrap   w-full py-1">
          {/* Column 1 */}
          <div className="w-full md:w-1/4  text-white pb-11 px-4 mt-2 sm:mt-0 mb-4 md:mb-0">
            {/* <h3 className="text-lg font-semibold mb-2">Column 1</h3> */}
            <ul>
            <Link to="/AboutPage">
              <li className=" transition-transform cursor-pointer">About Us</li>
              </Link>

              <Link to="/ContactUs">
              <li className="transition-transform cursor-pointer">Contact Us</li>
              </Link>

              <Link to="/CategoryPage">
              <li className=" transition-transform cursor-pointer">Exclusive Student Benefit</li>
              </Link>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/4 pb-11 text-white px-4 mb-4 md:mb-0">
            {/* <h3 className="text-lg font-semibold mb-2">Column 3</h3> */}
            <ul>
              <li className=" transition-transform cursor-pointer">Team</li>

              <Link to="/AvailableCourses">
              <li className=" transition-transform cursor-pointer">Course Outlines</li>
              </Link>

              <Link to="/WorkPage">
              <li className=" transition-transform cursor-pointer">Work For Us</li>
              </Link>
            </ul>
          </div>
          

          {/* Column 3 */}
          <div className="w-full h-auto  md:w-1/4 pb-11 text-white px-4 mb-4 md:mb-0">
            {/* <h3 className="text-lg font-semibold mb-2">Column 2</h3> */}
            <ul>

            <Link to="/TermsAndConditions">
              <li className=" transition-transform cursor-pointer">Terms & Conditions</li>
              </Link>

              <Link to="/PrivacyPolicy">
              <li className="transition-transform cursor-pointer">Privacy Policy</li>
              </Link>

              <li className=" transition-transform cursor-pointer">School Time Table</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/4 pb-11 text-white px-4  mb-4 md:mb-0 justify-end ">
          <Link to="/">
            <img
              src={Logowhite}
              alt="Logo"
              className=""
            />
             </Link>
             <div className="sm:items-end items-center justify-center mb-8 flex sm:justify-end sm:mt-0  text-gray-400  sm:pl-[100px]  sm:pr-[13%]">
                    <p>© 2024 BBI, Inc.</p>
                    
            </div>
          </div>
        </div>
      </div>
      {/* Logo */}
     

    </footer>
  );
};

export default Footer;
